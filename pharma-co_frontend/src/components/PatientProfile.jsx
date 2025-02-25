import React from "react";

const PatientProfile = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <div className="flex items-center space-x-4">
          <img src="https://via.placeholder.com/100" alt="Profile" className="w-20 h-20 rounded-full"/>
          <div>
            <h2 className="text-xl font-bold">Jane Rao</h2>
            <p className="text-gray-600">jane.doe@gmail.com</p>
          </div>
        </div>
        <hr className="my-4" />
        <p><strong>D.O.B:</strong> 01/01/1985</p>
        <p><strong>Phone:</strong> 123-456-7890</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Edit Profile</button>
      </div>
    </div>
  );
};

export default PatientProfile;
