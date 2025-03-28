import React, { useEffect, useState, useCallback } from "react";
import { fetchProducts, fetchCategories } from "../services/api";
import { Link, useSearchParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [page, setPage] = useState(1);
  const limit = 9;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "";
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [searchQuery, setSearchQuery] = useState("");

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const [productsData, categoriesData] = await Promise.all([
        fetchProducts(
          selectedCategory,
          minPrice || 0,
          maxPrice || 1000,
          (page - 1) * limit,
          limit,
          searchQuery
        ),
        fetchCategories(),
      ]);
      setProducts(productsData);
      setCategories(categoriesData);
    } catch (err) {
      setError("Error when loading data.");
    } finally {
      setLoading(false);
    }
  }, [selectedCategory, minPrice, maxPrice, page]);

  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);

    setSearchParams((prevParams) => {
      if (newCategory) {
        prevParams.set("category", newCategory);
      } else {
        prevParams.delete("category");
      }
      return prevParams;
    });
  };

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Our Products
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
        <input
        type="search"
        placeholder="Search for..."
        value={searchQuery}
        onChange={handleSearchQuery}
        className=" p-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
          <select
            className="border p-3 rounded shadow-md text-gray-700 focus:ring focus:ring-blue-300"
            value={selectedCategory}
            onChange={handleCategoryChange}
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
            className="border p-3 rounded shadow-md text-gray-700 focus:ring focus:ring-blue-300"
            placeholder="Min price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            className="border p-3 rounded shadow-md text-gray-700 focus:ring focus:ring-blue-300"
            placeholder="Max price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {product.title}
                    </h2>
                    <p className="text-blue-600 font-bold mt-2">
                      ${product.price}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center gap-3 mt-6">
          <button
            className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition disabled:opacity-50"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Prev
          </button>
          <span className="px-4 py-2 text-gray-700 font-semibold">{page}</span>
          <button
            className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
};

export default Products;
