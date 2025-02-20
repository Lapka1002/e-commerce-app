import React from "react";
import { useFormik } from "formik";
import { useShoppingCart } from "../contexts/CartContext";

import checkoutValidatonSchema from "../validationSchemas/checkoutValidationSchema";

const Checkout = () => {
  const { cartItems, totalPrice } = useShoppingCart();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
      company: "",
      address: "",
      apartment: "",
      city: "",
      state: "",
      postalCode: "",
    },
    validationSchema: checkoutValidatonSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const renderError = (field) =>
    formik.touched[field] && formik.errors[field] ? (
      <p className="text-red-500 text-sm">{formik.errors[field]}</p>
    ) : null;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {renderError('email')}
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
                {renderError('phone')}
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                {renderError('firstName')}
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
                {renderError('lastName')}
              </div>
            </div>

            <h3 className="text-xl font-bold mt-8">Payment Details</h3>
            <div>
              <label
                htmlFor="cardName"
                className="block text-sm font-medium text-gray-700"
              >
                Name on card
              </label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                onChange={formik.handleChange}
                value={formik.values.cardName}
              />
              {renderError('cardName')}
            </div>
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Card number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                onChange={formik.handleChange}
                value={formik.values.cardNumber}
              />
              {renderError('cardNumber')}
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="expiry"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expiration date (MM/YY)
                </label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                  onChange={formik.handleChange}
                  value={formik.values.expiry}
                />
                {renderError('expiry')}
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="cvc"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  name="cvc"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                  onChange={formik.handleChange}
                  value={formik.values.cvc}
                />
                {renderError('cvc')}
              </div>
            </div>

            <h3 className="text-xl font-bold mt-8">Shipping Address</h3>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company (optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                onChange={formik.handleChange}
                value={formik.values.company}
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Adress
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
              {renderError('address')}
            </div>
            <div>
              <label
                htmlFor="apartment"
                className="block text-sm font-medium text-gray-700"
              >
                Apartment, suite, etc.
              </label>
              <input
                type="text"
                id="apartment"
                name="apartment"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                onChange={formik.handleChange}
                value={formik.values.apartment}
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/3">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                />
                {renderError('city')}
              </div>
              <div className="w-1/3">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State / Province
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                  onChange={formik.handleChange}
                  value={formik.values.state}
                />
                {renderError('state')}
              </div>
              <div className="w-1/3">
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Postal code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                  onChange={formik.handleChange}
                  value={formik.values.postalCode}
                />
                {renderError('postalCode')}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className=" h-32 object-cover rounded-md mr-2"
                />
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <p className="ml-2 text-sm font-semibold">${item.price}</p>
              </div>
            ))}
            <div className="border-t border-gray-300 pt-4 space-y-2">
              <div className="flex justify-between">
                <p className="text-sm">Subtotal</p>
                <p className="text-sm font-semibold">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm">Shipping</p>
                <p className="text-sm font-semibold">$5.00</p>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <p>Total</p>
                <p>${(totalPrice + 5).toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
