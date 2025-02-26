import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, closeSidebar, activePage }) => {
  if (!isOpen) return null;


  const menuItems = {
    profile: [
      { name: "Patient Profile", path: "/profile" },
      { name: "Orders", path: "/orders" },
      { name: "Notes", path: "/notes" },
      { name: "Refills", path: "/refills" },
    ],
    orders: [
      { name: "Order Management", path: "/orders-management" },
      { name: "New Orders", path: "/new-orders" },
      { name: "Processing", path: "/processing" },
    ],
    prescriptions: [
      { name: "Upload Prescription", path: "/upload" },
      { name: "Review Orders", path: "/orders-review" },
    ],
    inventory: [
      { name: "Stock Management", path: "/stock" },
      { name: "Out of Stock", path: "/out-of-stock" },
    ],
  };

  return (
    <div className="fixed top-16 left-0 h-full w-64 bg-gray-100 shadow-md p-6 z-40 transition-all duration-300 mt-2">
    
      <button onClick={closeSidebar} className="text-black font-bold text-xl mb-4">&times;</button>

      <ul>
        {menuItems[activePage]?.map((item) => (
          <li key={item.name} className="mb-4">
            <Link
              to={item.path}
              className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-300"
              onClick={closeSidebar}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
