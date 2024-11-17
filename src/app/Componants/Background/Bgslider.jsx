"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './bg.css';

// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import GlobalButton from '@/app/Componants/GloabalButton/GlobalButton'

export default function Bgslider({ data }) {
  console.log(data);
const [hover,setHover]=useState()

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,

      }}
        // pagination={{
        //   // clickable: true,
        // }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }} modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        {
          data.map((d, index) => <SwiperSlide key={index}>

            <div onMouseLeave={()=>setHover('')} onMouseOver={()=>setHover(true)} className={`relative w-[900px] bg-cover h-[600px] px-5 justify-between items-center bg-[#e7e9eb] ${(index + 1) % 2 == 0 ? 'flex-row' : 'flex-row-reverse'}  flex `}>
              <div className='w-[600px]'>
                <Image height={400} width={400} className='bg-cover  h-full' src={d.img} />

              </div>
              <div className='px-10'>
                <p className={`${index % 2 == 0 ? 'text-left' : 'text-right'}  mb-5`}>{d.textHead}</p>
                <p className={`${index % 2 == 0 ? 'text-left' : 'text-right'} text-4xl font-bold`}>{d.mainText}</p>
                <div className={`${index % 2 == 0 ? 'justify-start' : 'justify-end'}  w-full flex `}>
                  <GlobalButton text={'Shop Now'} />
                </div>
              </div>
              <button className={`${hover?'block':'hidden'} custom-prev absolute top-1/2 left-2 -translate-y-1/2 bg-red-600 text-white  w-10 h-10 hover:bg-gray-600`}>
                &#8592;
              </button>
              <button className={`${hover?'block':'hidden'} custom-next absolute top-1/2 right-2 -translate-y-1/2 bg-red-600 text-white w-10 h-10   hover:bg-gray-600`}>
                &#8594;
              </button>
            </div>
          </SwiperSlide>
          )
        }

      </Swiper>
    </>
  );
}
