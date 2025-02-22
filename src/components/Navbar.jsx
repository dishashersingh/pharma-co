import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
      {/* Logo */}
      <div className="text-xl font-bold">PharmaCo</div>

      {/* Navigation Menu (Triggers Sidebar) */}
      <div className="space-x-6 flex">
        <button onClick={() => toggleSidebar("profile")} className="text-gray-700 hover:text-black">
         <Link to="/profile" >Profile</Link>
        </button>
        <button onClick={() => toggleSidebar("orders")} className="text-gray-700 hover:text-black">
        <Link to="/orders" >Orders</Link>
        </button>
        <button onClick={() => toggleSidebar("prescriptions")} className="text-gray-700 hover:text-black">
          Prescriptions
        </button>
        <button onClick={() => toggleSidebar("inventory")} className="text-gray-700 hover:text-black">
          Inventory
        </button>
      </div>

      {/* Profile & Logout */}
      <div className="flex items-center space-x-4">
        <img src="https://source.unsplash.com/40x40/?person" alt="Profile" className="w-10 h-10 rounded-full"/>
        <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
