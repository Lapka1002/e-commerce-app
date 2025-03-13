import useOrders from "../hooks/useOrders";
import { useAuth } from "../contexts/AuthContext";

const OrdersSection = () => {
  const { userInfo } = useAuth();
  const userId = userInfo.id;
  const { orders, loading, error } = useOrders(userId);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="border-b pb-4">
              <p className="text-lg font-medium text-gray-900">
                Total: ${order.total} (Discounted: `$
                {order.discountedTotal.toFixed(2)}`)
              </p>
              <div className="mt-2">
                <p className="text-gray-500 text-sm">Products:</p>
                <ul className="list-disc pl-5">
                  {order.products.map((product) => (
                    <li key={product.id} className="text-gray-700">
                      {product.title} (x{product.quantity}) - `$
                      {product.total.toFixed(2)}`
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrdersSection;
