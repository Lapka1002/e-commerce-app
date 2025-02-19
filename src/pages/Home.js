import React from "react";
import { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "../services/api";
import { Link } from "react-router-dom";

import CartButton from '../button/CartButton'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      setLoading(true);
      const [productsData, categoriesData] = await Promise.all([
        fetchProducts("", 0, 10000, 0, 6),
        fetchCategories(),
      ]);
      setProducts(productsData);
      setCategories(categoriesData);
    } catch (err) {
      setError("Ошибка при загрузке данных.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-xl text-gray-700">Загрузка...</div>
      </div>
    );
  } else if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome to Our Store  <CartButton/>
        </h1>
        <section>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Categories</h3>
            <ul className="flex flex-wrap space-x-4 mt-4">
              {categories.map((category, index) => (
                <li
                key={index}
                className="text-lg cursor-pointer text-gray-700"
              >
                <Link
                  to={`/products?category=${category.name}`}
                  className="hover:text-blue-500"
                >
                  {category.name}
                </Link>
              </li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <h2 className="my-8 text-2xl font-bold text-gray-800">
            Top Products
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <li
                key={product.id}
                className="cursor-pointer border border-gray-200 rounded-lg shadow-lg p-4 bg-white hover:bg-gray-50 transition duration-300"
              >
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-auto object-cover"
                  />
                  <h3 className="text-xl py-4 font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-lg text-gray-600">${product.price}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
};

export default Home;
