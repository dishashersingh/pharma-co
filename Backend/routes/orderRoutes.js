const express = require("express");
const Order = require("../models/Order.js");
const { protect } = require("../middleware/authMiddleware.js"); 

const router = express.Router();

router.post("/place",protect, async (req, res) => {
  try {
    const { orderId, userName, medicines, address, phone, paymentMethod, totalAmount } = req.body;
     const userId = req.user.userId;
     console.log(userId); 

    const newOrder = new Order({
      orderId,
       userId, 
      userName,
      medicines,
      address,
      phone,
      paymentMethod,
      totalAmount,
      status: "Pending",
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully!", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "Error placing order", error: error.message });
  }
});

router.get("/all", protect, async (req, res) => {
  try {
    const userId = req.user.userId;  
    const orders = await Order.find({ userId }); 
    if (!orders.length) {
      return res.status(404).json({ message: "No orders found" });
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Error fetching orders", error: error.message });
  }
});


module.exports = router;

