import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

import AppProviders from "./contexts/AppProviders";

import CartIconLayout from './layouts/CartIconLayout';
import HamburgerMenu from "./components/HamburgerMenu";

import "./styles/tailwind.css";

const App = () => {
  return (
    <AppProviders>
      <Router>
        <CartIconLayout>
          <HamburgerMenu />
          <AppRoutes />
        </CartIconLayout>
      </Router>
    </AppProviders>
  );
};

export default App;
