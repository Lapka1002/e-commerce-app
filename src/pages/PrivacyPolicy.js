import React from 'react';
import SEO from "../components/SEO";
const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto p-4">
            <SEO title={'Privacy policy'} />
            <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
            <p className="mt-4 text-gray-600">
                At My Shop, we are committed to protecting your privacy. We only collect
                personal information to improve our services and ensure a better shopping experience.
            </p>
            <h2 className="text-2xl mt-6">Data Collection</h2>
            <p className="text-gray-600">We may collect information such as your name, email address, and payment details.</p>
            <h2 className="text-2xl mt-6">Data Protection</h2>
            <p className="text-gray-600">Your data is protected by secure servers and encryption technologies.</p>
        </div>
    );
};

export default PrivacyPolicy;