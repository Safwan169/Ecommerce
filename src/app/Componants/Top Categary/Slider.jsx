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
import Image from 'next/image';
import Link from 'next/link';

export default function Slider({ d }) {
    return (
        <div className='lg:px-3'>
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 2, // 1 slide for mobile
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 2, // 2 slides for larger mobiles
                  spaceBetween: 20,
                },
                540: {
                  slidesPerView: 3, // 2 slides for larger mobiles
                  spaceBetween: 25,
                },
                768: {
                  slidesPerView: 4, // 3 slides for tablets
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 5, // 5 slides for desktops
                  spaceBetween: 40,
                },
                1280: {
                  slidesPerView: 6, // 6 slides for larger screens
                  spaceBetween: 40,
                },
              }}
                // centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,

                }}

                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {d?.map((data, index) => <SwiperSlide key={index}>
                    <Link href={`/shop/${data?.text}`} className='  group  z-30 text-[14px] py-3 w-full  space-y-5 '>
                        <div className='w-[50px] h-[50px] mx-auto'>
                            <Image width={100} height={100} className=' group-hover:scale-110 duration-500 w-[30px]' src={data.icon} alt="" />

                        </div>
                        <span className='flex transition-all group-hover:text-red-600 duration-300 mx-auto w-[100px]   justify-center'>
                            {data.text}
                        </span>
                    </Link>
                </SwiperSlide>)}

            </Swiper>
        </div>
    );
}
