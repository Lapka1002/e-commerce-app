import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

import AppProviders from "./contexts/AppProviders";
import { HelmetProvider } from 'react-helmet-async';
import CartIconLayout from './layouts/CartIconLayout';
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/tailwind.css";

const App = () => {
  return (
    <HelmetProvider>
      <AppProviders>
        <Router>
          <CartIconLayout>
            <Header />
            <AppRoutes />
            <Footer />
          </CartIconLayout>
        </Router>
      </AppProviders>
    </HelmetProvider>
  );
};

export default App;
