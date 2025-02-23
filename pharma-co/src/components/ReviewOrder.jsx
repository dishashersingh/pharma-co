import React from "react";

const ReviewOrder = () => {
  return (
    <div className="flex min-h-screen pt-16 bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-white p-6 shadow-md">
        <h2 className="text-lg font-bold mb-4">Review Order</h2>
        <div className="space-y-4">
          <div className="border-b pb-2">
            <p className="text-gray-600">Order details</p>
            <p className="font-semibold">Order #: 1234567890</p>
          </div>
          <div className="border-b pb-2">
            <p className="text-gray-600">Payment</p>
            <p className="font-semibold">Paid</p>
          </div>
          <div className="border-b pb-2">
            <p className="text-gray-600">Fulfillment</p>
            <p className="font-semibold">Pickup</p>
          </div>
          <div className="border-b pb-2">
            <p className="text-gray-600">Pickup time</p>
            <p className="font-semibold">Estimated: 1:00 PM</p>
          </div>
          <div className="border-b pb-2">
            <p className="text-gray-600">Special instructions</p>
            <p className="font-semibold">No special instructions</p>
          </div>
          <div>
            <p className="text-gray-600">Delivery method</p>
            <p className="font-semibold">Pickup</p>
          </div>
        </div>
      </div>

      {/* Main Order Review Section */}
      <div className="w-3/4 p-6 bg-white shadow-md mx-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Review and Confirm</h2>

        {/* Order Items */}
        <div className="border-b pb-4 mb-4">
          <p className="text-gray-600"><strong>Order #:</strong> 1234567890</p>
        </div>

        <div className="flex space-x-6">
          <div className="w-1/2">
            <p className="text-lg font-semibold">$8.50 - Lipitor 10mg</p>
            <p className="text-gray-500">30 tablets</p>
            <p className="text-lg font-semibold mt-4">$5.75 - Lisinopril 20mg</p>
            <p className="text-gray-500">90 tablets</p>
          </div>

          <div className="w-1/2">
            <img
              src="https://source.unsplash.com/150x150/?medicine,pills"
              alt="Lipitor"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://source.unsplash.com/150x150/?pharmacy,health"
              alt="Lisinopril"
              className="mt-4 rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Edit, Delete, and Confirm Buttons */}
        <div className="flex justify-between items-center mt-6 border-t pt-4">
          <button className="px-6 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-all duration-200">Edit</button>
          <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-200">Delete</button>
          <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-200">Confirm</button>
        </div>

        {/* Summary Section */}
        <div className="mt-6">
          <h3 className="text-lg font-bold">Summary</h3>
          <p className="flex justify-between">
            <span>Subtotal:</span> <span>$14.25</span>
          </p>
          <p className="flex justify-between">
            <span>Tax:</span> <span>$1.14</span>
          </p>
          <p className="flex justify-between font-bold">
            <span>Total:</span> <span>$15.39</span>
          </p>
        </div>

        {/* Save for Later Button */}
        <div className="mt-6 text-right">
          <button className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-200 transition-all duration-200">
            Save for later
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewOrder;
