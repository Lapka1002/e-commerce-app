import React from 'react';
import Modal from 'react-modal';
import { Link } from "react-router-dom";

Modal.setAppElement('#root');

const AddToCartModal = ({ isOpen, closePopup }) => {

    const continueShopping = () => {
        closePopup();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={closePopup} contentLabel="Product has been added to cart" className="fixed top-0 right-0 left-0 flex justify-center  items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="p-4 text-center relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow-sm border-black border">
                <h2 className="text-xl font-semibold">Product has been added to cart</h2>
                <div className="mt-4">
                    <Link to='/cart' className="bg-blue-500 text-white py-2 px-4 rounded mr-2">
                        Go to cart
                    </Link>
                    <button onClick={continueShopping} className="bg-gray-500 text-white py-2 px-4 rounded">
                        Continue shopping
                    </button>
                </div>
            </div>
        </Modal>
    );

}

export default AddToCartModal;