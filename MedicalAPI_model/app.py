from fastapi import FastAPI, UploadFile, File
import cv2
import pytesseract
import numpy as np
import re
from fuzzywuzzy import process
import spacy
from PIL import Image
import shutil

# Load the medical Named Entity Recognition (NER) model
try:
    nlp = spacy.load("en_core_med7_lg")
except:
    nlp = spacy.load("en_core_web_sm")

app = FastAPI()

drug_list = ["Aspirin", "Paracetamol", "Azithromycin", "Ibuprofen", "Metformin", "Amoxicillin", "Oflozest OZ", "Azenac-MR", "Andial", "Zofer", "Phenytoin Sodium"]

def preprocess_image(image_path):
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    image = cv2.convertScaleAbs(image, alpha=2.0, beta=50)
    blurred = cv2.GaussianBlur(image, (5, 5), 0)
    _, processed_img = cv2.threshold(blurred, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    return processed_img

def extract_text(image_path):
    processed_img = preprocess_image(image_path)
    custom_config = r'--oem 1 --psm 4'
    return pytesseract.image_to_string(processed_img, config=custom_config)

def identify_drug(extracted_text):
    cleaned_text = re.sub(r'[^a-zA-Z0-9\s]', '', extracted_text)
    words = cleaned_text.split()
    identified_drugs = []
    for word in words:
        match, score = process.extractOne(word, drug_list)
        if score > 75:
            identified_drugs.append(match)
    
    doc = nlp(extracted_text)
    ner_drugs = [ent.text for ent in doc.ents if ent.label_ == "DRUG"]
    filtered_ner_drugs = [drug for drug in ner_drugs if process.extractOne(drug, drug_list)[1] > 75]
    
    return list(set(identified_drugs + filtered_ner_drugs))

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    file_path = f"./{file.filename}"
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    extracted_text = extract_text(file_path)
    identified_drugs = identify_drug(extracted_text)
    
    return {"text": extracted_text, "drugs": identified_drugs}
