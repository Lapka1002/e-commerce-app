import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import { NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
const Header = () => {
    return (
        <header className="flex container mx-auto justify-between items-center py-4 border-b border-gray-200">
            <NavLink to="/" className="flex items-center space-x-2 ">
                <FaShoppingBag className="h-8 w-8 text-blue-500 ml-2 md:ml-0" />
                <span className="text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors">
                    MyBrand
                </span>
            </NavLink>
            <HamburgerMenu />
        </header>
    );
};
export default Header;