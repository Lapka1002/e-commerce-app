import React, { useContext, useState } from "react";
import { useShoppingCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

import "../styles/buttons.css";

const CartButton = () => {
    const { totalItems } = useShoppingCart();

    return (
        <Link to={`/cart`}>
            <div className="cartButton fixed bottom-5 right-5 z-50">
                {totalItems > 0 ? <div className="cartButton_total absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{totalItems}</div> : ``}
                <IoCartOutline size={40} className="text-gray-800 hover:text-black-500 transition duration-200 ease-in-out" />
            </div>
        </Link>
    );
}

export default CartButton;