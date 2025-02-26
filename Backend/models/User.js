const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    dob: { type: Date },
    sex: { type: String,},
    profileImage: { type: String },
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zip: { type: String },
      country: { type: String }
    },
    role: { type: String, enum: ["admin", "pharmacist", "customer"], default: "customer" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);