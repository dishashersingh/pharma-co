import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import uploadIcon from "../assets/file.png";

const Prescription = ({ setCart }) => {
  const [medicineInput, setMedicineInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImagePreview(URL.createObjectURL(file));
    
    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:8000/upload/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Error processing prescription");
        setLoading(false);
        return;
      }

      const medicineNames = data.drugs.join(", ");
      setMedicineInput(medicineNames);
      handleAddToCart(medicineNames);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to process prescription.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (medicines) => {
    if (!medicines.trim()) return;
    const medicineNames = medicines.split(",").map((med) => med.trim());

    try {
      setLoading(true);
      const response = await fetch(
        `/api/search/med?names=${medicineNames.join(",")}`
      );
      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Error searching for medicines");
        return;
      }

      if (data.length === 0) {
        alert("No matching medicines found!");
        return;
      }

      setCart((prevCart) => {
        const updatedCart = [...prevCart];
        data.forEach((med) => {
          const existingMedicine = updatedCart.find(
            (item) => item.name.toLowerCase() === med.name.toLowerCase()
          );

          if (existingMedicine) {
            existingMedicine.quantity += 1;
          } else {
            updatedCart.push({ ...med, quantity: 1 });
          }
        });
        return updatedCart;
      });
      navigate("/cart");
    } catch (error) {
      console.error("Error searching for medicines:", error);
      alert("Failed to fetch medicines.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl w-full text-center">
        <h2 className="text-xl font-bold mb-4">Manually enter prescription</h2>
        <p className="text-gray-600 mb-4">
          Upload a photo of the prescription to add it to your to-do list. If you have a lot of prescriptions, you may want to send them all at once.
        </p>

        {imagePreview && (
          <img src={imagePreview} alt="Prescription Preview" className="w-full mb-4 rounded-lg" />
        )}

        <label className="cursor-pointer bg-gray-200 py-2 px-4 rounded-lg inline-flex items-center gap-2 hover:bg-gray-300">
          <img src={uploadIcon} alt="Upload" className="w-5 h-5" />
          Upload image
          <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
        </label>

        <p className="text-gray-400 my-3">or</p>
        
        <input
          type="text"
          className="w-full p-2 border rounded-lg mb-3 text-center"
          placeholder="Enter prescription details here"
          value={medicineInput}
          readOnly
        />
        
        <button
          className="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-900 transition"
          disabled={loading}
        >
          {loading ? "Processing..." : "Add manually"}
        </button>
      </div>
    </div>
  );
};

export default Prescription;
