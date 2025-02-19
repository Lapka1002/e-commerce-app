import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/api";

import { useShoppingCart } from "../contexts/CartContext";

import ReviewCard from '../components/ReviewCard';
import ProductCard from '../components/ProductCard';
import AddToCartModal from '../components/modals/AddToCartModal';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const loadData = async () => {
    try {
      const productData = await fetchProductById(id);
      setProduct(productData);
    } catch (err) {
      console.log("Ошибка при загрузке данных.");
    }
  };

  useEffect(() => {
    loadData();
  }, [id]);

  const { isModalOpen, closePopup } = useShoppingCart();

  useEffect(() => {
    return () => {
      if (isModalOpen) {
        closePopup();
      }
    };
  }, [closePopup]);

  const reviews = product?.reviews || [];

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <AddToCartModal isOpen={isModalOpen} closePopup={closePopup} />
      <ProductCard  product={product} />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Customer Reviews</h2>
        <div className="mt-4 space-y-4">
          {reviews.length > 0 ? (
            reviews.map((review, index) => <ReviewCard key={index} review={review} />)
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
