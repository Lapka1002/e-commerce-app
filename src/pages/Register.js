import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import registerValidationSchema from "../validationSchemas/registerValidationSchema";

const Register = () => {
  const navigate = useNavigate();

  const registerUser = async (userData) => {
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Register failed");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        setSubmitting(true);

        const data = await registerUser(values);
        navigate("/login");
      } catch (error) {
        setErrors({ general: error.message });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {formik.errors.general && (
          <div className="text-red-500 mb-4">{formik.errors.general}</div>
        )}
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-2 border rounded mb-2"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username && (
          <p className="text-red-500">{formik.errors.username}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-2"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && (
          <p className="text-red-500">{formik.errors.password}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="w-full p-2 border rounded mb-2"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && (
          <p className="text-red-500">{formik.errors.email}</p>
        )}
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          className="w-full p-2 border rounded mb-2"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName && (
          <p className="text-red-500">{formik.errors.firstName}</p>
        )}
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          className="w-full p-2 border rounded mb-2"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName && (
          <p className="text-red-500">{formik.errors.lastName}</p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
          disabled={formik.isSubmitting}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
