import React from "react";
import { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "../services/api";
import { Link } from "react-router-dom";

import CartButton from '../button/CartButton'
import Banner from '../components/Banner'
import CategoriesSection from '../components/CategoriesSection'
import Spinner from '../components/Spinner'

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
      <Spinner/>
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
        <CartButton />
        <section className="mb-12">
          <CategoriesSection categories={categories} />
        </section>
        <section>
          <Banner />
        </section>
        <section className="mb-4">
          <h2 className="my-8 text-2xl font-bold text-gray-800 text-center">
            Top Products
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {products.map((product) => (
              <li key={product.id} className="group">
                <Link
                  to={`/products/${product.id}`}
                  className="block bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full  object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-lg text-gray-600">
                      ${product.price}
                    </p>
                  </div>
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
