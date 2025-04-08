import { useAuth } from "../contexts/AuthContext"; // правильный путь
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useShoppingCart } from "../contexts/CartContext";


const HamburgerMenu = () => {
  const { user, logout } = useAuth();
  const [isOpen, setOpen] = useState(false);

  const navigate = useNavigate();

  const { totalItems } = useShoppingCart();

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/");
  };

  return (
    <div>
      <div className="md:hidden relative">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && (
          <ul className="absolute top-100 right-0 w-fit bg-white p-6 space-y-4 text-lg font-semibold text-gray-700 shadow-lg z-40">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-600 transition duration-300 text-grey-400"
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
                    : "hover:text-blue-600 transition duration-300 text-grey-400"
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorite"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-600 transition duration-300 text-grey-400"
                }
              >
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1 relative"
                    : "hover:text-blue-600 transition duration-300 text-grey-400 relative"
                }
              >
                {totalItems > 0 ? <div className="absolute top-[-6px] right-[-20px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{totalItems}</div> : ``}
                Cart
              </NavLink>
            </li>
            {user ? (
              <>
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                        : "hover:text-blue-600 transition duration-300 text-grey-400"
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <button
                    className={
                      "bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                    }
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>

            ) : (
              <>
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
                        ? "bg-blue-700 text-white px-4 py-2 rounded-lg whitespace-nowrap"
                        : "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 whitespace-nowrap"
                    }
                  >
                    Join Now
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        )}
      </div>

      <nav className="hidden md:block">
        <div className="container mx-auto px-6 py-4">
          <ul className="flex items-center space-x-6 text-lg  text-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-600 transition duration-300 text-grey-400"
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
                    : "hover:text-blue-600 transition duration-300 text-grey-400"
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorite"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-600 transition duration-300 text-grey-400"
                }
              >
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1 relative"
                    : "hover:text-blue-600 transition duration-300 text-grey-400 relative"
                }
              >
                {totalItems > 0 ? <div className="absolute top-[-13px] right-[-13px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{totalItems}</div> : ``}
                Cart
              </NavLink>
            </li>
            {user ? (
              <>
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                        : "hover:text-blue-600 transition duration-300 text-grey-400"
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <button
                    className={
                      "bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                    }
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                        : "hover:text-blue-600 transition duration-300 text-grey-400"
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
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
