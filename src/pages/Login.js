import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const loginUser = async (username, password) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
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
    },
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        setSubmitting(true);

        const data = await loginUser(values.username, values.password);
        localStorage.setItem("token", data.token); // Сохраняем токен
        navigate("/"); // Перенаправляем на главную страницу
      } catch (error) {
        setErrors({ username: error.message }); // Показываем ошибку
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
        <h2 className="text-2xl font-bold mb-4">Login</h2>

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

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;


