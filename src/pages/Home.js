import React from "react";
import { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "../services/api";
import { Link } from "react-router-dom";

import SEO from "../components/SEO";
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
      <Spinner />
    );
  } else if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto p-4 overflow-hidden">
        <SEO
          title={"Home"}
          description={"Welcome to My Shop, your destination for the latest products and exclusive offers."}
          keywords={"shop, products, online store, discounts, new arrivals"} />
        <section className="my-12">
          <CategoriesSection categories={categories} />
        </section>
        <section>
          <Banner />
        </section>
        <section className="my-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Best Sellers</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
            {products.map((product) => (
              <li key={product.id} className="group bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Link to={`/products/${product.id}`} className="block">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full  object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{product.title}</h3>
                    <p className="mt-2 text-lg font-bold text-blue-600">${product.price}</p>
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
