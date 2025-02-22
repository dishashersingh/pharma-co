import React from "react";

const orders = [
  { id: 1, name: "Lisinopril 20mg", status: "Ready for Pickup" },
  { id: 2, name: "Lipitor 10mg", status: "Processing" },
];

const OrderManagement = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-xl font-bold">Order Management</h2>
        <ul className="mt-4">
          {orders.map((order) => (
            <li key={order.id} className="border-b py-2 flex justify-between">
              <span>{order.name}</span>
              <span className={`text-${order.status === "Ready for Pickup" ? "green" : "yellow"}-500`}>
                {order.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderManagement;
