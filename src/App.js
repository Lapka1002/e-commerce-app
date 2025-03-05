import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

import AppProviders from "./contexts/AppProviders";

import CartIconLayout from './layouts/CartIconLayout';
import Header from "./components/Header";

import "./styles/tailwind.css";

const App = () => {
  return (
    <AppProviders>
      <Router>
        <CartIconLayout>
          <Header />
          <AppRoutes />
        </CartIconLayout>
      </Router>
    </AppProviders>
  );
};

export default App;
