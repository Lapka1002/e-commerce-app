import React, { useEffect, useState, useCallback } from "react";
import { fetchProducts, fetchCategories } from "../services/api";
import { Link, useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import Spinner from "../components/Spinner";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tempMinPrice, setTempMinPrice] = useState("");
  const [tempMaxPrice, setTempMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [page, setPage] = useState(1);
  const limit = 8;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "";
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalProducts, setTotalProducts] = useState(0);

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
      setTotalProducts(productsData.length);
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
    setPage(1);


    setSearchParams((prevParams) => {
      if (newCategory) {
        prevParams.set("category", newCategory);
      } else {
        prevParams.delete("category");
      }
      return prevParams;
    });
  };

  const handleApplyPriceFilter = () => {
    setMinPrice(tempMinPrice);
    setMaxPrice(tempMaxPrice);
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
        <SEO title={"Products"} />
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Our Products
        </h1>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 mb-6">
          <input
            type="search"
            placeholder="Search for..."
            value={searchQuery}
            onChange={handleSearchQuery}
            className="w-full md:w-auto p-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            className="w-full md:w-auto border p-3 rounded shadow-md text-gray-700 focus:ring focus:ring-blue-300"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            type="number"
            className="w-full md:w-auto border p-3 rounded shadow-md text-gray-700 focus:ring focus:ring-blue-300"
            placeholder="Min price"
            value={tempMinPrice}
            onChange={(e) => setTempMinPrice(e.target.value)}
          />
          <input
            type="number"
            className="w-full md:w-auto border p-3 rounded shadow-md text-gray-700 focus:ring focus:ring-blue-300"
            placeholder="Max price"
            value={tempMaxPrice}
            onChange={(e) => setTempMaxPrice(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-3 rounded shadow-md hover:bg-blue-600"
            onClick={handleApplyPriceFilter}
          >
            Apply
          </button>
        </div>
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="relative group overflow-hidden border rounded-lg bg-white shadow-md hover:shadow-lg transition-all"
              >
                <Link to={`/products/${product.id}`}>
                  <div className="relative w-full h-80">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-sm text-gray-800 font-medium">{product.title}</h2>
                    <p className="text-lg font-bold text-gray-900 mt-1">${product.price}</p>
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
            className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition disabled:opacity-50"
            onClick={() => setPage(page + 1)}
            disabled={totalProducts < limit}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
};

export default Products;
