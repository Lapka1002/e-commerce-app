import React from 'react';

import SEO from "../components/SEO";

const Contact = () => {
    return (
        <div className="container mx-auto p-4">
            <SEO title={'Contact'} />
            <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
            <p className="mt-4 text-gray-600">You can reach us through the following means:</p>
            <ul className="mt-4 text-gray-600">
                <li>Email: <a href="mailto:contact@mybrand.com">contact@mybrand.com</a></li>
                <li>Phone: +123-456-7890</li>
                <li>Address: 123 Shop Street, City, Country</li>
            </ul>
        </div>
    );
};

export default Contact;