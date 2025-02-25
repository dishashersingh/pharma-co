import React from "react";

const Profile = ({ isSidebarOpen }) => {
  return (
    <div
      className={`transition-all duration-300 ${
        isSidebarOpen ? "ml-64" : "ml-0"
      } p-6 bg-gray-100 min-h-screen`}
    >
      <div className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="flex items-center space-x-6">
          <img
            src="https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-621.jpg?w=2000"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold">Jane Rao</h2>
            <p className="text-gray-600">jane.doe@gmail.com</p>
          </div>
        </div>

        {/* Edit & New Order Buttons */}
        <div className="flex justify-end space-x-4 mt-4">
          <button className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-200">
            Edit Profile
          </button>
          <button className="px-4 py-2 bg-black text-white rounded">
            New Order
          </button>
        </div>

        <hr className="my-6" />

        {/* Personal Information */}
        <div className="text-sm">
          <p className="flex justify-between">
            <span className="text-gray-500">D.O.B:</span> <span>01/01/1985</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-500">Sex:</span> <span>Female</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-500">Phone:</span> <span>123-456-7890</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-500">Email:</span> <span>jane.doe@gmail.com</span>
          </p>
        </div>

        <hr className="my-6" />

        {/* Shipping Address */}
        <h3 className="font-bold">Shipping Address</h3>
        <div className="text-sm">
          <p>Jane Rao</p>
          <p>123 Main St, Apt 123</p>
          <p>San Francisco, CA 94111</p>
        </div>

        <hr className="my-6" />

        {/* Insurance Information */}
        <h3 className="font-bold">Insurance</h3>
        <div className="text-sm">
          <p className="flex justify-between">
            <span className="text-gray-500">Cardholder:</span> <span>Jane Rao</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-500">ID:</span> <span>12345678</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-500">Group:</span> <span>ABCD</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-500">PCN:</span> <span>1234</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-500">BIN:</span> <span>5678</span>
          </p>
        </div>

        <hr className="my-6" />

        {/* Prescription List */}
        <h3 className="font-bold mb-4">Prescriptions</h3>
        <div className="space-y-4">
          {[
            { name: "Alprazolam 1mg", expiry: "01/01/2023" },
            { name: "Sertraline 50mg", expiry: "01/01/2023" },
            { name: "Lorazepam 2mg", expiry: "01/01/2023" },
          ].map((prescription, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={`https://source.unsplash.com/50x50/?medicine,pills&sig=${index}`}
                  alt={prescription.name}
                  className="w-10 h-10 rounded"
                />
                <div>
                  <p className="font-semibold">{prescription.name}</p>
                  <p className="text-gray-500 text-sm">Expires {prescription.expiry}</p>
                </div>
              </div>
              <button className="px-4 py-1 text-gray-600 border border-gray-400 rounded hover:bg-gray-100">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
