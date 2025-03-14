import { useState, useEffect } from "react";

const useOrders = (userId) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://dummyjson.com/carts");
      if (!res.ok) throw new Error("Error fetching orders");

      const data = await res.json();

      const userOrders = data.carts.filter((order) => order.userId === userId);
      setOrders(userOrders);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchOrders();
    }
  }, [userId]);

  return { orders, loading, error };
};

export default useOrders;
