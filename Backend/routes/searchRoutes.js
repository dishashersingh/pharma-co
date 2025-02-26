const express = require("express");
const Medicine = require("../models/Medicines.js");

const router = express.Router();

router.get("/med", async (req, res) => {
  try {
    const { names } = req.query;
    
    if (!names) {
      return res.status(400).json({ message: " Please provide medicine names in the query." });
    }

    const medicineNames = names.split(",").map((med) => new RegExp(med.trim(), "i"));

    
    const medicines = await Medicine.find({ name: { $in: medicineNames } });

    if (medicines.length === 0) {
      return res.status(404).json({ message: " No matching medicines found." });
    }

    res.json(medicines);
  } catch (error) {
    console.error(" Error searching medicines:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

module.exports = router;
