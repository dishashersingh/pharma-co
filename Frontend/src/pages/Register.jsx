import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        setError(data.message || "Failed to register. Try again.");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
     
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-green-600">Join PharmaCo!</h1>
        <p className="text-gray-600 mt-2">Create an account to get started.</p>
      </div>

     
      <div className="p-8 bg-white shadow-md rounded-md w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-3 p-3 border rounded focus:ring focus:ring-green-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-3 border rounded focus:ring focus:ring-green-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-3 border rounded focus:ring focus:ring-green-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-gray-600 text-white p-3 rounded hover:bg-gray-700 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Already have an account? <a href="/login" className="text-green-600 font-semibold">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
