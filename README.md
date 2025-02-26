# 🏥 Pharma-Co: Full-Stack Prescription and Medicine Ordering System  

An online pharmacy management system with **MERN stack** for authentication, user profiles, and order history, and **FastAPI** for prescription processing via OCR.  

---

## 🌟 Features  
- 🎄 **Upload Prescription** - Users can upload images of prescriptions.  
- 🔍 **OCR & Drug Detection** - Extracts medicine names from images using Tesseract OCR and SpaCy.  
- 🛒 **Add to Cart** - Extracted medicines are automatically added to the cart.  
- 🏥 **MERN Authentication** - User sign-up, login, and profile management.  
- 🛋️ **Order History** - Users can track their previous medicine orders.  
- ⚡ **FastAPI Integration** - Secure and efficient API with CORS handling.  

---

## 🛠️ Tech Stack  
### **Frontend:**  
- **React.js** (Vite)  
- **Tailwind CSS**  
- **React Router**  

### **Backend:**  
- **Node.js + Express.js** (for authentication & order management)  
- **FastAPI** (for OCR & medicine extraction)  

### **Database:**  
- **MongoDB + Mongoose** (User profiles, orders)  

### **OCR & NLP:**  
- **Tesseract OCR** (Extract text from images)  
- **OpenCV** (Preprocess images)  
- **SpaCy** (Drug name entity recognition)  

---

## 🛀 Installation Guide  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/dishashersingh/pharma-co.git  
cd pharma-co
```

---

## **Backend Setup (MERN - Express & FastAPI)**  

### **🔹 2️⃣ Setup FastAPI for OCR**
#### **Create a Virtual Environment & Install Dependencies**
```sh
cd MedicalAPI
python -m venv venv  
source venv/bin/activate    # Mac/Linux  
venv\Scripts\activate       # Windows  
pip install -r requirements.txt  
```

#### **Install Tesseract OCR**  
- **Windows**: [Download & Install](https://github.com/UB-Mannheim/tesseract/wiki)  
  - Add `C:\Program Files\Tesseract-OCR\` to `PATH` in system variables  
- **Linux (Ubuntu/Debian)**:  
  ```sh
  sudo apt install tesseract-ocr  
  ```
- **macOS**:  
  ```sh
  brew install tesseract  
  ```

#### **Run FastAPI Server**
```sh
uvicorn app:app --reload  
```
💪 FastAPI API available at: [`http://127.0.0.1:8000`](http://127.0.0.1:8000)  

---

### **🔹 3️⃣ Setup MERN (Express.js & MongoDB)**
#### **Install Node.js Dependencies**
```sh
cd Backend 
npm install  
```

#### **Environment Variables (`.env`)**
```env
PORT=5000  
MONGO_URI=your-mongodb-connection-string  
JWT_SECRET=your-jwt-secret  
```

#### **Run Express Server**
```sh
npm start  
```
💪 Express API available at: [`http://127.0.0.1:5000`](http://127.0.0.1:5000)  

---

## **Frontend Setup (React + Vite)**  
#### **🔹 Install Dependencies**
```sh
cd Frontend  
npm install  
```

#### **🔹 Start Development Server**
```sh
npm run dev  
```
💪 React App available at: [`http://localhost:5173`](http://localhost:5173)  

---

## 🔗 API Endpoints  

### **💄 Upload Prescription (OCR & Drug Extraction)**  
**`POST /upload/`** (FastAPI)  
- **Request:** `multipart/form-data`  
- **Response:** JSON containing extracted text and medicines  
```json
{
  "text": "Paracetamol 500mg, Ibuprofen 400mg",
  "drugs": ["Paracetamol", "Ibuprofen"]
}
```

### **🔍 Search for Medicines**  
**`GET /api/search/med?names=<comma-separated-medicine-names>`** (Express.js)  
- **Response:**  
```json
[
  {
    "_id": "65d9876543abcdef12345679",
    "name": "Paracetamol",
    "price": 3.50,
    "description": "Pain reliever and fever reducer",
    "stock": 50
  }
]
```

### **🛡️ Authentication (MERN - Express & MongoDB)**  
#### **Sign Up**
**`POST /api/auth/signup`**  
```json
{
  "name": "Disha singh",
  "email": "disha@example.com",
  "password": "securepassword"
}
```

#### **Login**
**`POST /api/auth/login`**  
```json
{
  "email": "disha@example.com",
  "password": "securepassword"
}
```

### **🛍️ Order Management**
#### **Get User Orders**
**`GET /api/orders`**  
```json
[
  {
    "orderId": "65df12345abcdef",
    "items": ["Paracetamol", "Ibuprofen"],
    "totalAmount": 10.50,
    "status": "Delivered"
  }
]
```

---

## 🏢 Project Structure  
```
pharma-co/
│── MedicalAPI/
│   ├── app.py  # FastAPI for OCR
│   ├── requirements.txt
│
│── Backend/
│   ├── server.js  # Express.js API
│   ├── routes/
│   ├── models/
│
│── Frontend/
│   ├── src/
│   ├── public/
│   ├── vite.config.js
│
└── README.md
```


