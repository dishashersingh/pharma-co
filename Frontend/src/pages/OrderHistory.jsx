import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all"); 
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/order/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading orders...</p>;

  const now = new Date();
  const newOrders = orders.filter(order => {
    const orderDate = new Date(order.createdAt);
    const hoursDifference = (now - orderDate) / (1000 * 60 * 60);
    return hoursDifference <= 12;
  });

  const displayedOrders = activeTab === "new" ? newOrders : orders;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-extrabold text-gray-900">Order Management</h2>
          <p className="text-gray-500">Manage your prescription orders and view alerts</p>
        </div>

        <div className="flex space-x-6 mt-6 border-b pb-2">
          <button
            className={`pb-2 ${activeTab === "all" ? "border-b-2 border-black font-bold text-gray-900" : "text-gray-500"}`}
            onClick={() => setActiveTab("all")}
          >
            All Orders
          </button>
          <button
            className={`pb-2 ${activeTab === "new" ? "border-b-2 border-black font-bold text-gray-900" : "text-gray-500"}`}
            onClick={() => setActiveTab("new")}
          >
            New
          </button>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-900">
            {activeTab === "new" ? "New Orders (Last 12 Hours)" : "All Orders"}
          </h3>

          {displayedOrders.length === 0 ? (
            <p className="text-gray-600 mt-4">No orders found.</p>
          ) : (
            <div className="mt-4 space-y-4">
              {displayedOrders.map((order, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 flex justify-between items-center">
                  <div>
                    <p className="text-gray-500">Order #{order.orderId}</p>
                    <h3 className="text-xl font-bold">{order.medicines[0]?.name}</h3>
                    <p className="text-gray-500">{order.medicines[0]?.quantity} Tablets</p>
                    <button
                      className="mt-3 px-4 py-2 border border-gray-400 rounded hover:bg-gray-200"
                
                    >
                      View Details
                    </button>
                  </div>
                  <img
                    src={order.medicines[0]?.imageUrl}
                    alt="Medicine"
                    className="w-32 h-24 rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default OrderHistory;
