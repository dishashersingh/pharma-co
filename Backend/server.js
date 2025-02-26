const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/authRoutes.js"); 
const addRoutes = require("./routes/addRoutes.js");
const searchRoutes =require("./routes/searchRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use("/api/medicine",addRoutes);
app.use("/api/search",searchRoutes);
app.use("/api/order",orderRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
