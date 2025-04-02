import React from 'react';

import SEO from "../components/SEO";

const AboutUs = () => {
    return (
        <div className="container mx-auto p-4">
            <SEO title={'About us'} />
            <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
            <p className="mt-4 text-gray-600">
                We are a company dedicated to providing the best products for our customers.
                Our mission is to make shopping easy, enjoyable, and affordable for everyone.
            </p>
        </div>
    );
};

export default AboutUs;