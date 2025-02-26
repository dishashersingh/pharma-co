import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ isAuthenticated, handleLogout, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
     
      <div className="flex items-center space-x-4">
        {isAuthenticated && (
          <button onClick={toggleSidebar} className="text-gray-700 hover:text-black">
            <FiMenu size={24} />
          </button>
        )}
        <div className="text-xl font-bold">PharmaCo</div>
      </div>

      
      <div className="space-x-6 flex">
        <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
        {isAuthenticated && <Link to="/profile"  className="text-gray-700 hover:text-black">Profile</Link>}
        {isAuthenticated && <Link to="/orders" className="text-gray-700 hover:text-black">Orders</Link>}
        {isAuthenticated && <Link to="/prescriptions" className="text-gray-700 hover:text-black">Prescriptions</Link>}
      </div>

     
      <div className="flex items-center space-x-4">
        {isAuthenticated && (
          <img 
            src="https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Profile" 
            className="w-10 h-10 rounded-full"
          />
        )}

       
        {isAuthenticated ? (
          <button
            onClick={() => {
              handleLogout();
              navigate("/login");
            }}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
