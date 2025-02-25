// const express = require("express");
// const multer = require("multer");
// const cloudinary = require("cloudinary").v2;
// const axios = require("axios");
// const Prescription = require("../models/Prescription");
// const authMiddleware = require("../middleware/authMiddleware");
// const dotenv = require("dotenv");

// dotenv.config();
// const router = express.Router();

// // Cloudinary Configuration
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Multer for File Upload
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // ✅ FIXED: Ensure `authMiddleware` is passed correctly
// router.post("/upload", authMiddleware, upload.single("image"), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No image uploaded" });
//     }

//     // Upload image to Cloudinary
//     cloudinary.uploader.upload_stream(
//       { resource_type: "image" },
//       async (error, cloudinaryResponse) => {
//         if (error) return res.status(500).json({ message: "Image upload failed" });

//         // Send image URL to ML API
//         try {
//           const mlResponse = await axios.post(process.env.ML_API_URL, {
//             imageUrl: cloudinaryResponse.secure_url,
//           });

//           // Save Prescription to Database
//           const prescription = new Prescription({
//             userId: req.user.userId,
//             imageUrl: cloudinaryResponse.secure_url,
//             extractedMedicines: mlResponse.data.medicines,
//           });

//           await prescription.save();

//           res.status(200).json({ message: "Prescription uploaded", medicines: mlResponse.data.medicines });
//         } catch (mlError) {
//           res.status(500).json({ message: "Error processing prescription with ML API", error: mlError.message });
//         }
//       }
//     ).end(req.file.buffer);
//   } catch (error) {
//     res.status(500).json({ message: "Error processing prescription", error: error.message });
//   }
// });

// module.exports = router;
