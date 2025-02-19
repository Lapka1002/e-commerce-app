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
    let url = `${API_BASE_URL}?limit=${limit}&skip=${skip}`;

    if (category) {
      url = `${API_BASE_URL}/category/${category}?limit=${limit}&skip=${skip}`;
    }
    const responce = await fetch(url);

    const data = await responce.json();

    const filteredProducts = data.products.filter(product =>
      product.price >= minPrice && product.price <= maxPrice
    )
    return filteredProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

//fetch product by id
export const fetchProductById = async (id) => {
  try {
    const responce = await fetch(`${API_BASE_URL}/${id}`);
    const data = await responce.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

//fetch category
export const fetchCategories = async () => {
  try {
    const responce = await fetch(`${API_BASE_URL}/categories`);
    const data = await responce.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

