
import React from "react";
import { useShoppingCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";


const Cart = () => {
  const { cartItems, removeItemFromCart, totalPrice, updateItemQuantity, totalItems } = useShoppingCart();


  return (
    <div className="max-w-4xl mx-auto p-6">
      {cartItems.length > 0 ? (
        <>
          <h2 className="text-3xl font-bold mb-6 text-center">Shopping Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})</h2>
          <ul className="space-y-6">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-white p-4 border-t border-b border-gray-200 flex-col md:flex-row">
                <div className="flex items-center md:space-x-6 flex-col md:flex-row">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    loading="lazy"
                    className="h-32 object-cover rounded-md "
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-1 mr-4">{item.description}</p>
                    <p className="text-sm text-gray-500 mt-2">Price: ${item.price}</p>
                  </div>
                </div>
                <div className="text-center flex flex-col md:mt-0 mt-2">
                  <div className="flex items-center mb-4">
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                      className={`px-3 py-1 border rounded-lg text-gray-700 ${item.quantity === 1
                        ? 'bg-gray-100 cursor-not-allowed'
                        : 'hover:bg-gray-200'}`}
                    >
                      <FaMinus />
                    </button>
                    <span className="font-semibold mx-3 text-lg">{item.quantity}</span>
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                       <FaPlus />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItemFromCart(item.id)}
                    className="text-red-500 hover:underline text-sm md:ml-auto flex"
                  >
                    <span>Remove</span>
                    <FaTrash className="ml-2" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between text-gray-800 font-bold text-lg">
                <span>Order Total</span>
                <span>${(totalPrice + 5).toFixed(2)}</span>
              </div>
            </div>
            <Link to="/checkout">
              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold text-lg">
                Checkout
              </button>
            </Link>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            or <Link to="/products" className="text-blue-500 hover:underline">Continue Shopping</Link>
          </p>
        </>
      ) : (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;