import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import { NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
const Header = () => {
    return (
        <header className="flex container mx-auto justify-between items-center py-4 border-b border-gray-200">
            <NavLink to="/">
                <div className="flex items-center cursor-pointer">
                    <FaShoppingBag className="h-8 w-8 text-blue-500" />
                    <span className="ml-2 text-2xl font-bold text-gray-800 hover:text-blue-500 transition-colors">MyBrand</span>
                </div>
            </NavLink>
            <HamburgerMenu />
        </header>
    )
}

export default Header;