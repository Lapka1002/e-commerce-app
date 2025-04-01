const API_BASE_URL = "https://dummyjson.com/products";

//fetch all products
export const fetchProducts = async (
  category = "",
  minPrice = 0,
  maxPrice = 1000,
  skip = 0,
  limit = 9
) => {
  try {
    const url = new URL(category ? `${API_BASE_URL}/category/${category}` : API_BASE_URL);
    url.searchParams.append("limit", limit);
    url.searchParams.append("skip", skip);
    url.searchParams.append("minPrice", minPrice);
    url.searchParams.append("maxPrice", maxPrice);

    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch products");

    const data = await response.json();

    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

//fetch product by id
export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

//fetch category
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

