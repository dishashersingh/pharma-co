import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; 

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    fetch("/api/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user details:", error));
  }, []);

  const handleConfirmOrder = () => {
    const uniqueOrderId = uuidv4(); 
    setOrderId(uniqueOrderId);
  
    fetch("/api/order/place", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        orderId: uniqueOrderId, 
        userId: user._id,  
        userName: user.name, 
        medicines: cart,
        address: user.address,
        phone: user.phone,
        paymentMethod: "Cash on Delivery",
        totalAmount: cart.reduce((sum, item) => sum + item.quantity * item.price, 0) * 1.1, // Including 10% tax
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setOrderSuccess(true); 
        setCart([]); 
      })
      .catch((error) => console.error("Error placing order:", error));
  };
  

 
  const handleIncreaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  
  const handleDecreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    } else {
      handleDeleteItem(index);
    }
  };

  
  const handleDeleteItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  if (!user) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className="flex min-h-screen pt-16 bg-gray-100">
      
      <div className="w-1/4 bg-white p-6 shadow-md">
        <h2 className="text-lg font-bold mb-4">Review Order</h2>
        <div className="space-y-4">
          <div className="border-b pb-2">
            <p className="text-gray-600">Order details</p>
            <p className="font-semibold">Order #: {orderId || "Generating..."}</p>
          </div>
          <div className="border-b pb-2">
            <p className="text-gray-600">Payment</p>
            <p className="font-semibold">💵 Cash on Delivery</p>
          </div>
          <div className="border-b pb-2">
            <p className="text-gray-600">Delivery Address</p>
            <p className="font-semibold">
              {user.address?.street}, {user.address?.city}, {user.address?.state} - {user.address?.zip}
            </p>
          </div>
          <div className="border-b pb-2">
            <p className="text-gray-600">Phone</p>
            <p className="font-semibold">{user.phone}</p>
          </div>
        </div>
      </div>

     
      <div className="w-3/4 p-6 bg-white shadow-md mx-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Review and Confirm</h2>

        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-4 mb-4">
              <div className="w-2/3">
                <p className="text-lg font-semibold">${item.price} - {item.name}</p>
                <p className="text-gray-500">Quantity: {item.quantity}</p>

                
                <div className="mt-2 flex items-center space-x-2">
                  <button
                    className="px-2 py-1 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition"
                    onClick={() => handleDecreaseQuantity(index)}
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition"
                    onClick={() => handleIncreaseQuantity(index)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="w-1/8 flex justify-end">
                <img src={item.imageUrl} alt={item.name} className="rounded-lg shadow-md" />
              </div>
            </div>
          ))
        )}

       
        <div className="mt-6">
          <h3 className="text-lg font-bold">Summary</h3>
          {Array.isArray(cart) && cart.length > 0 ? (
            <>
              <p className="flex justify-between">
                <span>Subtotal:</span> 
                <span>${cart.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span>Tax (10%):</span> 
                <span>${(cart.reduce((sum, item) => sum + item.quantity * item.price, 0) * 0.1).toFixed(2)}</span>
              </p>
              <p className="flex justify-between font-bold">
                <span>Total:</span> 
                <span>${(cart.reduce((sum, item) => sum + item.quantity * item.price, 0) * 1.1).toFixed(2)}</span>
              </p>
            </>
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
        </div>

        <div className="flex justify-between items-center mt-6 border-t pt-4">
          <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-200" onClick={() => setCart([])}>
            Clear Cart
          </button>
          <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-200" onClick={handleConfirmOrder}>
            Confirm Order
          </button>
        </div>
      </div>

     
      {orderSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Order Placed Successfully! 🎉</h2>
            <p className="text-gray-700">Your order ID: <strong>{orderId}</strong></p>
            <p className="text-gray-500 mt-2">Thank you for shopping with us!</p>
            <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition" onClick={() => navigate("/orders")}>
              <button onClick={() => navigate("/orders")}>view order details</button>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
