import React from 'react';
import Modal from 'react-modal';
import { Link } from "react-router-dom";

Modal.setAppElement('#root');

const AddToCartModal = ({ isOpen, closePopup }) => {

    const continueShopping = () => {
        closePopup();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closePopup}
            contentLabel="Product has been added to cart"
            className="fixed top-0 right-0 left-0 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div className="p-4 text-center relative w-full max-w-xl sm:max-w-md bg-white rounded-lg shadow-lg border-black border mx-2">
                <h2 className="text-xl font-semibold mb-4">Product has been added to cart</h2>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
                    <Link
                        to='/cart'
                        className="bg-blue-500 text-white py-2 px-4 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center"
                    >
                        Go to cart
                    </Link>
                    <button
                        onClick={continueShopping}
                        className="bg-gray-500 text-white py-2 px-4 rounded w-full sm:w-auto text-center"
                    >
                        Continue shopping
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default AddToCartModal;
