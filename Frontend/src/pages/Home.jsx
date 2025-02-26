import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     
      <div className="relative bg-gray-700 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-extrabold">Welcome to PharmaCo</h1>
        <p className="mt-4 text-lg">Your trusted pharmacy management solution.</p>
        <Link to="/orders" className="mt-6 inline-block bg-white text-gray-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-200 transition">
          Get Started
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 p-6">
        <Link to="/orders" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
          <h2 className="text-xl font-bold">Manage Orders</h2>
          <p className="text-gray-600">View and process prescription orders efficiently.</p>
        </Link>
        <Link to="/prescriptions" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
          <h2 className="text-xl font-bold">Prescriptions</h2>
          <p className="text-gray-600">Upload and review prescriptions securely.</p>
        </Link>
        <Link to="/profile" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
          <h2 className="text-xl font-bold">User Profile</h2>
          <p className="text-gray-600">Manage your personal details effortlessly.</p>
        </Link>
      </div>

      <div className="bg-white p-8 mt-10 shadow-lg rounded-lg mx-6">
        <h2 className="text-2xl font-bold text-center mb-6">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="p-4 bg-gray-100 rounded-md shadow-md">
            <p className="italic">"PharmaCo has completely streamlined our order management process!"</p>
            <p className="font-bold mt-2">- Dr. Ayesha Patel</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-md shadow-md">
            <p className="italic">"A fantastic tool for pharmacists and healthcare professionals."</p>
            <p className="font-bold mt-2">- Rahul Sharma</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-md shadow-md">
            <p className="italic">"Easy to use, fast, and reliable. Highly recommended!"</p>
            <p className="font-bold mt-2">- Sarah Singh</p>
          </div>
        </div>
      </div>

      <div className="text-center py-6 mt-10 bg-gray-700
       text-white">
        <p>&copy; 2025 PharmaCo. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
