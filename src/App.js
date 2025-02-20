import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import AppRoutes from "./routes";

import { ShoppingCartProvider } from "./contexts/CartContext";

import CartIconLayout from './layouts/CartIconLayout';
import HamburgerMenu from "./components/HamburgerMenu";

import "./styles/tailwind.css";

const App = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <CartIconLayout>
          <HamburgerMenu/>
          <AppRoutes />
        </CartIconLayout>
      </Router>
    </ShoppingCartProvider>
  );
};

export default App;
