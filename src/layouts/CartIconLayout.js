import React from 'react';
import { useLocation } from 'react-router-dom';
import CartButton from '../button/CartButton';

const CartIconLayout = ({ children }) => {

    const location = useLocation();
    const hideCartIconPaths = [
        '/cart',
        '/checkout',
        '/login',
        '/profile',
        '/register'
    ];

    const hideCartIcon = hideCartIconPaths.includes(location.pathname);

    return (
        <div>
            <main>
                {/* {!hideCartIcon && <CartButton />} */}
                {children}
            </main>
        </div>
    )

}

export default CartIconLayout;