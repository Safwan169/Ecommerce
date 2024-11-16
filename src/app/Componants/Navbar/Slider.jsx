"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import data from "@/app/Componants/Navbar/sliderText"

export default function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={2}

                spaceBetween={5}
                // centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,

                }}

                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {data?.map(d => <SwiperSlide>
                    <div className='flex text-[14px] items-center gap-2 justify-center'>
                        <p >{d.icon}</p>
                        <span className='flex'>
                            {d.text}
                        </span>
                    </div>
                </SwiperSlide>)}

            </Swiper>
        </>
    );
}
