const express = require("express");
const Medicine = require("../models/Medicines.js");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    
    

    const { name, price, description, stock } = req.body;

    if (!name || !price) {
      return res.status(400).json({ message: " Name and price are required" });
    }

    const newMedicine = new Medicine({
      name,
      price,
      description,
      stock: stock || 100,
    });

    await newMedicine.save();
    res.status(201).json({ message: "✅ Medicine added successfully!", medicine: newMedicine });
  } catch (error) {
    console.error("Error adding medicine:", error);
    res.status(500).json({ message: "Error adding medicine", error: error.message });
  }
});

module.exports = router;
