const mongoose = require("mongoose");

const MedicineSchema = new mongoose.Schema({
  name: { type: String, required: true},
  price: { type: Number, required: true },
  description: { type: String },
  stock: { type: Number, default: 100 },
  imageUrl: { type: String, default: "https://source.unsplash.com/150x150/?medicine,pills" },
});

module.exports = mongoose.model("Medicine", MedicineSchema);
