import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center text-white" style={{ backgroundImage: 'url(https://via.placeholder.com/1500x800)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 px-6 py-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Discover Amazing Products
                </h1>
                <p className="text-lg mb-6">
                    Find the best deals on top products, handpicked for you.
                </p>
                <Link to="/products" className="bg-blue-500 text-white py-2 px-6 rounded-lg text-xl hover:bg-blue-700 transition duration-300">
                    Shop Now
                </Link>
            </div>
        </div>
    );
};

export default Banner;