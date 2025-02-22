import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Prescription from "./pages/Prescription";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("");

  const toggleSidebar = (page) => {
    setActivePage(page);
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex pt-16">
        <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} activePage={activePage} />
        <div  className={`transition-all duration-300 w-full ${sidebarOpen ? "ml-64" : "ml-0"} p-6`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/prescriptions" element={<Prescription />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
