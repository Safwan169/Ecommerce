"use client"
import React, { useEffect,  useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'animate.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import GlobalButton from '@/app/Componants/GloabalButton/GlobalButton'
import AOS from "aos";
import "aos/dist/aos.css";
export default function Bgslider({ data }) {
  const [hover, setHover] = useState()


  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,

        }}
        // pagination={{
        //   // clickable: true,
        // }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }} modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          data.map((d, index) => <SwiperSlide key={index}>

         <div className=' flex justify-end w-full h-screen lg:mx-[7%]'>
         <div onMouseLeave={() => setHover(false)} onMouseOver={() => setHover(true)} className={` group animate__animated animate__repeat animate__delay-0.9s  animate__fadeIn  relative w-full h-1/2 lg:w-[79%] md:w-[100%] bg-cover md:h-[50%] lg:h-[79%]   lg:px-16 justify-between items-center bg-[#e7e9eb] ${(index + 1) % 2 == 0 ? 'flex-row' : 'flex-row-reverse'}  flex `}>
              <div className='w-[200px] md:w-[400px] md:h-[400px]    lg:w-[66%] h-[200px]  lg:h-[66%px]'>
                <Image height={700} width={600} className='bg-cover  animate__animated animate__repeat animate__delay-1s animate__fadeIn  h-[200px]' src={d.img} alt='bg' />

              </div>
              <div className=' md:px-5 lg:px-0 px-3   w-full lg:relative absolute lg:w-fit'>
                <div className={` ${index % 2 == 0 ? 'text-left' : ' flex-col justify-end flex items-end '}`}>

                  <p className={`${index % 2 == 0 ? 'text-left' : 'text-right '} w-fit    right-0 animate__animated animate__repeat animate__delay-0.9s  animate__fadeInUpBig md:text-xl lg:text-xl md text-[14px] mb-5`}>{d.textHead}</p>

                  <div className={`${index % 2 == 0 ? 'text-left lg:w-fit md:w-1/2 w-1/2' : 'text-right w-fit flex justify-end '}  w-fit animate__animated animate__repeat animate__delay-1s  animate__fadeInUp lg:text-4xl text-[16px] md:text-2xl    font-bold`}>

                    <p className={`${index % 2 == 0 ? ' lg:w-3/4 md:w-full w-3/4 ' : 'text-right b  lg:w-[80%] md:w-3/4 w-3/4 '}`}>
                      {d.mainText}
                    </p>
                  </div>
                  <div className={`${index % 2 == 0 ? 'justify-start' : 'justify-end'}   animate__animated animate__repeat animate__delay-2s animate__fadeInUp  lg:mt-7   w-fit flex `}>
                    <GlobalButton text={'Shop Now'} />
                  </div>
                </div>
              </div>
              <button className={`${hover ? 'block animate__fadeInRight':' hidden '}   left-4 animate__animated animate__repeat animate__delay-0.9s group-hover:duration-1000 custom-prev absolute top-1/2 -translate-y-1/2  bg-red-700 text-white  w-10   h-10 hover:bg-gray-600`}>
                &#8592;
              </button>
              <button className={`${hover ? 'block animate__fadeInLeft':'hidden '}  animate__animated animate__repeat animate__delay-0.9s  custom-next absolute top-1/2 right-4 -translate-y-1/2 bg-red-700 text-white w-10  h-10  hover:bg-gray-600`}>
                &#8594;
              </button>
            </div>
         </div>
          </SwiperSlide>
          )
        }

      </Swiper>
    </>
  );
}
