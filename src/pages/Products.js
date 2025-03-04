import React from "react";
import { useEffect, useState, useCallback } from "react";
import { fetchProducts, fetchCategories } from "../services/api";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("1000");
  const [page, setPage] = useState(1);
  const limit = 9;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const [productsData, categoriesData] = await Promise.all([
        fetchProducts(
          selectedCategory,
          minPrice === "" ? 0 : minPrice,
          maxPrice === "" ? 1000 : maxPrice,
          (page - 1) * limit,
          limit
        ),
        fetchCategories(),
      ]);
      setProducts(productsData);
      setCategories(categoriesData);
    } catch (err) {
      setError("Ошибка при загрузке данных.");
    } finally {
      setLoading(false);
    }
  }, [selectedCategory, minPrice, maxPrice, page]);


  useEffect(() => {
    loadData();
  }, [loadData]);


  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    setMinPrice(value === "" ? "" : parseInt(value));
  };
  
  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    setMaxPrice(value === "" ? "" : parseInt(value));
  };
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="flex flex-wrap gap-4 mb-4">
        <select
          className="border p-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          className="border p-2"
          placeholder="Min price"
          value={minPrice}
          onChange={handleMinPriceChange}
        />

        <input
          type="number"
          className="border p-2"
          placeholder="Max price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <Link to={`/products/${product.id}`}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full object-cover rounded-md mb-2 hover:opacity-75"
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-700">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="px-4 py-2">{page}</span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
