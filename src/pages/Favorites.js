
import React from "react";
import { Link } from "react-router-dom";

import { useFavoritesContext } from "../contexts/FavoritesContext";
import { useShoppingCart } from "../contexts/CartContext";

import SEO from "../components/SEO";

import { FaHeartBroken } from 'react-icons/fa';

const Favorites = () => {
    const { removeItemFromFavorites, favoriteItems } = useFavoritesContext();
    const { addItemToCart } = useShoppingCart();
    return (
        <div>
            <SEO
                title={Favorites}
                description={"View your favorite products and add them to your cart for easy access."}
                keywords={"favorites, wishlist, products, cart, shop"} />
            {
                favoriteItems.length > 0 ? (
                    <div className="bg-gray-50 min-h-screen py-10 px-5">
                        <div className="max-w-7xl mx-auto">
                            <h1 className="text-4xl font-semibold text-center text-gray-800 mb-10">Your Favorite Products</h1>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {favoriteItems.map((item) => (
                                    <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="w-full  object-cover"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-xl font-medium text-gray-900">{item.name}</h3>
                                            <p className="text-gray-600 mt-2">${item.price.toFixed(2)}</p>
                                        </div>
                                        <div className="flex justify-between items-center p-4 bg-gray-100">
                                            <div>
                                                <button
                                                    onClick={() => removeItemFromFavorites(item.id)}
                                                    className="text-red-500 hover:text-red-700 font-semibold mr-3">
                                                    Remove
                                                </button>
                                                <button
                                                    className="text-blue-500 hover:text-red-700 font-semibold"
                                                    onClick={() => addItemToCart(item)}
                                                >
                                                    Add to cart
                                                </button>
                                            </div>
                                            <Link to={`/products/${item.id}`}>
                                                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                                                    View Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-gray-600 text-lg py-20">
                        <FaHeartBroken className="w-12 h-12 mx-auto text-gray-400" />
                        <p className="mt-4">Your favorites are empty.</p>
                    </div>
                )}
        </div>
    );
};
export default Favorites;