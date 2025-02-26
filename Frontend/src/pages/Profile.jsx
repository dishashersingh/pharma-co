import React, { useState, useEffect } from "react";

const Profile = ({ isSidebarOpen }) => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const defaultImage =
    "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  useEffect(() => {
    fetch("/api/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setEditData(data);
      })
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

 
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      address: { ...editData.address, [name]: value },
    });
  };


  const handleUpdate = () => {
    fetch("/api/auth/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(editData),
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        setUser(updatedUser);
        setIsEditing(false);
      })
      .catch((error) => console.error("Error updating profile:", error));
  };

  if (!user) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className={`transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"} p-6 bg-gray-100 min-h-screen`}>
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
        
    
        <div className="flex items-center space-x-6">
          <img
            src={user.profileImage || defaultImage}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

      
        <div className="flex justify-end space-x-4 mt-6">
          <button
            className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-200 transition"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
          <button className="px-6 py-2 bg-black text-white rounded-lg shadow-md hover:shadow-lg transition">
            New Order
          </button>
        </div>

        <hr className="my-6 border-gray-300" />

      
        <div className="text-sm space-y-3">
          <p className="flex justify-between text-gray-700">
         
            <span className="font-semibold">D.O.B:</span> <span> {user.dob ? new Date(user.dob).toISOString().split("T")[0] : "N/A"}</span>
          </p>
          <p className="flex justify-between text-gray-700">
            <span className="font-semibold">Sex:</span> <span>{user.sex}</span>
          </p>
          <p className="flex justify-between text-gray-700">
            <span className="font-semibold">Phone:</span> <span>{user.phone}</span>
          </p>
          <p className="flex justify-between text-gray-700">
            <span className="font-semibold">Email:</span> <span>{user.email}</span>
          </p>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="mt-6">
  <h3 className="font-bold text-lg text-gray-900 font-sans tracking-wide">Shipping Address</h3>
  
  <div className="text-sm text-gray-700 font-sans leading-relaxed mt-2">
    <p className="font-medium">
      <span className="text-gray-500 font-semibold">House & Street:</span> {user.address?.street || "N/A"}
    </p>
    <p className="font-medium">
      <span className="text-gray-500 font-semibold">City:</span> {user.address?.city || "N/A"}
    </p>
    <p className="font-medium">
      <span className="text-gray-500 font-semibold">State:</span> {user.address?.state || "N/A"}
    </p>
    <p className="font-medium">
      <span className="text-gray-500 font-semibold">ZIP Code:</span> {user.address?.zip || "N/A"}
    </p>
  </div>
</div>
        <hr className="my-6 border-gray-300" />


        {isEditing && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 mt-20">
    <div className="bg-white p-8 rounded-xl shadow-lg w-[600px]"> 
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Edit Profile</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="name"
            value={editData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mb-3"
            placeholder="Name"
          />
          <input
            type="text"
            name="phone"
            value={editData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mb-3"
            placeholder="Phone"
          />
          <input
            type="date"
            name="dob"
            value={editData.dob}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mb-3"
          />
          <select
            name="sex"
            value={editData.sex}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mb-3"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

      
        <div>
          <h3 className="font-bold text-gray-900 mb-2">Address</h3>
          <input
            type="text"
            name="street"
            value={editData.address?.street || ""}
            onChange={handleAddressChange}
            className="w-full p-2 border rounded-lg mb-3"
            placeholder="Street"
          />
          <input
            type="text"
            name="city"
            value={editData.address?.city || ""}
            onChange={handleAddressChange}
            className="w-full p-2 border rounded-lg mb-3"
            placeholder="City"
          />
          <input
            type="text"
            name="state"
            value={editData.address?.state || ""}
            onChange={handleAddressChange}
            className="w-full p-2 border rounded-lg mb-3"
            placeholder="State"
          />
          <input
            type="text"
            name="zip"
            value={editData.address?.zip || ""}
            onChange={handleAddressChange}
            className="w-full p-2 border rounded-lg mb-3"
            placeholder="ZIP Code"
          />
        </div>
      </div>

     
      <div className="mt-4 flex space-x-3">
        <button
          className="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-900 transition"
          onClick={handleUpdate}
        >
          Save
        </button>
        <button
          className="w-full bg-gray-200 p-2 rounded-lg hover:bg-gray-300 transition"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}
 </div>
</div>
  );
};

export default Profile;
