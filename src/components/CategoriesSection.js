import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import "../index.css";

const CategoriesSection = ({ categories }) => {
    return (
        <div className="relative overflow-visible">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Categories</h3>
            <Swiper
                spaceBetween={20}
                modules={[Navigation, Pagination]}
                slidesPerView="auto"
                loop={true}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true }}
                className="px-4"
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index} className="text-lg cursor-pointer text-gray-700 w-fit">
                        <Link to={`/products?category=${category.name}`} className="hover:text-blue-500">
                            <span className="font-semibold">{category.name}</span>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-next absolute right-[-20px] top-[63px] transform z-10">
                <MdKeyboardArrowRight />
            </div>
            <div className="swiper-button-prev absolute left-[-10px] top-[63px] transform z-10">
                <MdKeyboardArrowLeft />
            </div>
        </div>
    );
};

export default CategoriesSection;
