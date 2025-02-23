import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-2 gap-4">
        <Link to="/orders" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Manage Orders</h2>
          <p className="text-gray-600">View and process prescription orders</p>
        </Link>
        <Link to="/prescriptions" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Prescriptions</h2>
          <p className="text-gray-600">Upload and review prescriptions</p>
        </Link>
        <Link to="/profile" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Profile</h2>
          <p className="text-gray-600">Manage your personal details</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
