import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import { PiChargingStation } from "react-icons/pi";

const CategoriesSection = ({ categories }) => {
    return (
        <div>
            <h3 className="text-2xl font-bold text-gray-800">Categories</h3>
            <Swiper
                spaceBetween={20}
                modules={[Navigation, PiChargingStation]}
                slidesPerView="auto"
                loop={true}
                navigation={{ clickable: true }}
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index} className="text-lg cursor-pointer text-gray-700 w-fit">
                        <Link to={`/products?category=${category.name}`} className="hover:text-blue-500">
                            <span className="font-semibold">{category.name}</span>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CategoriesSection;
