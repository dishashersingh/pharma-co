import React, { useState } from "react";

const orders = [
  {
    id: "123456",
    name: "Tenofovir Disoproxil Fumarate",
    dosage: "300mg Tablet",
    image: "https://source.unsplash.com/150x100/?medicine,pills",
  },
  {
    id: "123457",
    name: "Zolpidem Tartrate",
    dosage: "10mg Tablet",
    image: "https://source.unsplash.com/150x100/?pharmacy,health",
  },
  {
    id: "123458",
    name: "Ondansetron Hydrochloride",
    dosage: "8mg Tablet",
    image: "https://source.unsplash.com/150x100/?tablets,capsules",
  },
  {
    id: "123459",
    name: "Lisinopril",
    dosage: "20mg Tablet",
    image: "https://source.unsplash.com/150x100/?medicines,drugs",
  },
];

const OrderManagement = () => {
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <div className="pt-16 p-6 bg-gray-100 min-h-screen">
     
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Order Management</h1>
        <p className="text-gray-500 mb-6">Manage your prescription orders and view alerts</p>

        <div className="flex space-x-6 border-b pb-2 mb-6">
          {["All Orders", "New", "In Progress", "Ready for Pickup", "Past Due"].map((tab) => (
            <button
              key={tab}
              className={`pb-2 transition-all duration-200 ${
                activeTab === tab ? "font-semibold border-b-2 border-black text-black" : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex space-x-4 mb-6">
          {["Prescriptions", "Verifications", "Alerts"].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 bg-gray-200 rounded-md transition-all duration-200 hover:bg-gray-300"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center bg-white p-4 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
            >
              <img src={order.image} alt={order.name} className="w-24 h-16 rounded-lg object-cover"/>
              <div className="flex-1 px-6">
                <p className="text-gray-500 text-sm">Order #{order.id}</p>
                <h2 className="text-lg font-bold">{order.name}</h2>
                <p className="text-gray-600">{order.dosage}</p>
              </div>
              <button className="px-4 py-2 bg-gray-200 rounded-md transition-all duration-200 hover:bg-gray-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
