import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";
const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && (
          <ul className="flex items-center space-x-6 text-lg font-semibold text-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-600 transition duration-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-600 transition duration-300"
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-600 transition duration-300"
                }
              >
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-600 transition duration-300"
                }
              >
                Log In
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-700 text-white px-4 py-2 rounded-lg"
                    : "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                }
              >
                Join Now
              </NavLink>
            </li>
          </ul>
        )}
      </div>

      <nav className="hidden md:block">
        <div className="container mx-auto px-6 py-4">
          <ul className="flex items-center space-x-6 text-lg font-semibold text-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-600 transition duration-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-600 transition duration-300"
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-600 transition duration-300"
                }
              >
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-600 transition duration-300"
                }
              >
                Log In
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-700 text-white px-4 py-2 rounded-lg"
                    : "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                }
              >
                Join Now
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
 export default HamburgerMenu;