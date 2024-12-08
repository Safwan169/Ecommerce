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

            breakpoints={
                {
                    320: {
                    slidesPerView: 1, // 1 slide for mobile
                    spaceBetween: 5
                  },
                  640: {
                    slidesPerView: 1, // 2 slides for tablets
                    spaceBetween: 2
                  },
                  768: {
                    slidesPerView: 1, // 3 slides for small desktops
                    spaceBetween: 2
                  },
                  1024: {
                    slidesPerView: 2, // 4 slides for medium desktops
                    spaceBetween: 5
                  }

                }

                // Add breakpoints here
            }
               
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
                    <div className='flex text-[14px] items-center gap-2   justify-center'>
                        <p >{data.icon}</p>
                        <span className='flex '>
                            {data.text}
                        </span>
                    </div>
                </SwiperSlide>)}

            </Swiper>
        </>
    );
}
