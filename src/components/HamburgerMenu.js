import React, { useState, useMemo } from "react";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";
const NavMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const navLinks = useMemo(() =>
    [
      { to: "/", label: "Home" },
      { to: "/products", label: "Shop" },
      { to: "/cart", label: "Cart" },
      { to: "/login", label: "Log In" },
      { to: "/register", label: "Join Now", special: true },
    ], []
  )

  const getNavLinksClass = (isActive, special) => {
    if (isActive) {
      return special
        ? "bg-blue-700 text-white px-4 py-2 rounded-lg"
        : "text-blue-600 border-b-2 border-blue-600 pb-1"
    } else {
      return special
        ? "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        : "hover:text-blue-600 transition duration-300"
    }
  }

  const NavItems = ({ isMobile, closeMenu }) => (
    <ul
      className={`${isMobile ? "flex flex-col space-y-4 absolute bg-white top-[48px] px-4 text-right" : "flex items-center space-x-6"
        } text-lg font-semibold text-gray-700`}
    >
      {navLinks.map(({ to, label, special }) => (
        <li key={to}>
          <NavLink
            to={to}
            className={({ isActive }) => getNavLinksClass(isActive, special)}
            onClick={isMobile ? closeMenu : null}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
  return (
    <div>
      <div className="md:hidden relative flex justify-end">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && <NavItems isMobile  closeMenu={() => setOpen(false)}/>}
      </div>

      <nav className="hidden md:block">
        <div className="container mx-auto px-6 py-4">
          <NavItems />
        </div>
      </nav>
    </div>
  );
};
export default NavMenu;