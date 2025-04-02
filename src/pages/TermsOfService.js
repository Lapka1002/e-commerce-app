import React from 'react';
import SEO from "../components/SEO";

const TermsOfService = () => {
    return (
        <div className="container mx-auto p-4">
            <SEO title={'Terms of service'} />
            <h1 className="text-4xl font-bold text-gray-800">Terms of Service</h1>
            <p className="mt-4 text-gray-600">
                Welcome to My Shop! By using our services, you agree to the following terms and conditions:
            </p>
            <ul className="mt-4 text-gray-600">
                <li>1. You must be at least 18 years old to use our services.</li>
                <li>2. All purchases are subject to availability.</li>
                <li>3. You agree to provide accurate and complete information when making a purchase.</li>
                <li>4. We reserve the right to modify or terminate the services at any time.</li>
            </ul>
        </div>
    );
};

export default TermsOfService;