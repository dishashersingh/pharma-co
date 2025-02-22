import React from "react";

const orders = [
  { id: "123456", name: "Tenofovir Disoproxil", dosage: "300mg Tablet", status: "Ready for Pickup" },
  { id: "123457", name: "Zolpidem Tartrate", dosage: "10mg Tablet", status: "Processing" },
  { id: "123458", name: "Ondansetron Hydrochloride", dosage: "8mg Tablet", status: "Completed" },
  { id: "123459", name: "Lisinopril", dosage: "20mg Tablet", status: "Processing" },
];

const Orders = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen ">
      <h2 className="text-2xl font-bold mb-6">Order Management</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {orders.map((order) => (
          <div key={order.id} className="border-b py-4 flex justify-between items-center">
            <div>
              <p className="text-lg font-bold">{order.name}</p>
              <p className="text-gray-600">{order.dosage}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-white text-sm ${
              order.status === "Ready for Pickup" ? "bg-green-500" :
              order.status === "Processing" ? "bg-yellow-500" :
              "bg-gray-500"
            }`}>
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
