const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: true, unique: true },
     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
    userName: { type: String, required: true },
    medicines: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        imageUrl: { type: String },
      },
    ],
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
    },
    phone: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    status: { type: String, default: "Pending" }, 
    },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
