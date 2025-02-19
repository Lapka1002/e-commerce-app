import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
    )
}

export default AppRoutes;