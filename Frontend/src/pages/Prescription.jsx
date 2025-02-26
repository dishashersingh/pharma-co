import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Prescription = ({ setCart }) => {
  const [medicineInput, setMedicineInput] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

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
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Upload Prescription</h2>
        <input
          type="file"
          accept="image/*"
          className="w-full p-2 border rounded-lg mb-3"
          onChange={handleImageUpload}
        />
        <input
          type="text"
          className="w-full p-2 border rounded-lg mb-3"
          placeholder="Extracted medicines will appear here"
          value={medicineInput}
          readOnly
        />
      </div>
    </div>
  );
};

export default Prescription;
