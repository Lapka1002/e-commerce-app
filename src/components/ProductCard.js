import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { useShoppingCart } from "../contexts/CartContext";

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
const ProductCard = ({ product }) => {

    const { addItemToCart } = useShoppingCart();

    const images = product.images || [];

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
                {images.length > 1 ? (
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true
                        }}
                        loop={true}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={`Product Image ${index} - ${product.title}`}
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </SwiperSlide>
                        ))}
                        <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2  text-blue p-3 ">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#3b82f6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6l6 6-6 6" />
                            </svg>
                        </div>
                        <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 text-blue p-3 ">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#3b82f6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 6l-6 6 6 6" />
                            </svg>
                        </div>
                    </Swiper>
                ) : (
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full  object-cover"
                    />
                )}
            </div>
            <div className="flex flex-col justify-between md:w-1/2">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                    <p className="text-lg text-gray-600 my-3">{product.description}</p>
                    <p className="text-2xl font-semibold text-blue-600">${product.price}</p>
                </div>
                <button
                    onClick={() => addItemToCart(product)}
                    className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
                    Add to cart
                </button>
            </div>
        </div>
    )

}

export default ProductCard;