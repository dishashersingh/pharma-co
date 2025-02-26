import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Prescription from "./pages/Prescription";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import OrderHistory from "./pages/OrderHistory";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("");
  const [cart, setCart] = useState("");

  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  
  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Navbar toggleSidebar={setActivePage} isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <div className="flex pt-16">
        {isAuthenticated && <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />}
        <div className="w-full p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
            <Route path="/orders" element={isAuthenticated ? <OrderHistory/>  : <Navigate to="/login" />} />
            <Route path="/prescriptions" element={isAuthenticated ? <Prescription setCart={setCart} /> : <Navigate to="/login" />} />
            <Route path="/cart" element={isAuthenticated ? <Cart setCart={setCart} cart={cart}/> : <Navigate to="/login" />} />

            <Route path="/login" element={!isAuthenticated ? <Login setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/profile" />} />
            <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
