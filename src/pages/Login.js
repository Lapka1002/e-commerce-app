import React from "react";
import { useFormik } from "formik";
import loginSchema from "../validationSchemas/loginValidationSchema";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const API_BASE_URL = "https://dummyjson.com/auth";

  const loginUser = async (email, password) => {
    try {
      const { data } = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });
      return data;
    } catch {
      throw new Error("Login failed");
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        setSubmitting(true);

        const data = await loginUser(values.email, values.password);
        localStorage.setItem("token", data.token);
        navigate("/");
      } catch (error) {
        setErrors({ email: error.message });
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-2"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && (
          <p className="text-red-500">{formik.errors.email}</p>
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

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
