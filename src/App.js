import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import AppRoutes from "./routes";

import { ShoppingCartProvider } from "./contexts/CartContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";

import CartIconLayout from './layouts/CartIconLayout';
import HamburgerMenu from "./components/HamburgerMenu";

import "./styles/tailwind.css";

const App = () => {
  return (
    <ShoppingCartProvider>
      <FavoritesProvider>
        <Router>
          <CartIconLayout>
            <HamburgerMenu />
            <AppRoutes />
          </CartIconLayout>
        </Router>
      </FavoritesProvider>
    </ShoppingCartProvider>
  );
};

export default App;
