'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css'

import { Autoplay, Pagination } from 'swiper/modules';

const SliderComponents = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    let length = 10;
    const arry = Array.from({ length }).map((value, i) => {
        return {
            src: `https://source.unsplash.com/random/800x450?sig=${i}`,
            alt: `Image ${i + 1}`,
            _id: i + 1
        }
    })


    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
            >
                {
                    arry.map(data => <SwiperSlide key={data._id}>
                        <img src={data.src} alt={data.alt} />
                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default SliderComponents;