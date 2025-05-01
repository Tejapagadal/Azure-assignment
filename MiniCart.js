import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const MiniCart = () => {
  const { cartItems, calculateSubtotal } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Cart Icon */}
      <button
        onClick={toggleCart}
        className="relative text-gray-600 hover:text-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5m12-5l2 5m-6-5v5m0 0H9m3 0h3"
          />
        </svg>
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
          {cartItems.length}
        </span>
      </button>

      {/* MiniCart Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-lg font-bold mb-4">Your Cart</h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-600">
                      {item.quantity} x ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              <div className="border-t pt-4">
                <p className="text-sm font-semibold">
                  Subtotal: ${calculateSubtotal().toFixed(2)}
                </p>
              </div>
              <div className="mt-4 flex justify-between">
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                  View Cart
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  disabled={cartItems.length === 0}
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MiniCart;