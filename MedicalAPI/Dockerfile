# Use the official Python slim image
FROM python:3.11-slim

# Install system dependencies and Tesseract OCR
RUN apt-get update && apt-get install -y \
    tesseract-ocr \
    libgl1 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /app

# Copy all files into the container
COPY . .

# Install Python dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Expose the port FastAPI will run on (same as Render PORT env)
EXPOSE 10000

# Run the FastAPI server
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "10000"]
