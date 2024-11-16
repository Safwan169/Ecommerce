"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider({d}) {
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
                {d?.map((data,index)=> <SwiperSlide key={index}>
                    <div className='flex text-[14px] items-center gap-2 justify-center'>
                        <p >{data.icon}</p>
                        <span className='flex'>
                            {data.text}
                        </span>
                    </div>
                </SwiperSlide>)}

            </Swiper>
        </>
    );
}
