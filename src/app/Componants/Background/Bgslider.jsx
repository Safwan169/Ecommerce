"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "animate.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import GlobalButton from "@/app/Componants/GloabalButton/GlobalButton";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Bgslider({ data }) {
  const [hover, setHover] = useState();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    // <div className="slide-end border border-white ">
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
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper slide-end "
    >
      {data.map((d, index) => (
        <SwiperSlide key={index}>
          <div className="  w-[100%]  h-full   ">
            <div
              onMouseLeave={() => setHover(false)}
              onMouseOver={() => setHover(true)}
              className={` flex  group animate__animated animate__repeat animate__delay-0.9s  mx-0   animate__fadeIn  relative w-full  h-full md:w-[100%]  lg:w-[100%]   lg:h-1/2  bg-cover md:h-[50%]   lg:px-16 justify-between items-center bg-[#e7e9eb] ${
                (index + 1) % 2 == 0 ? "flex-row " : "flex-row-reverse"
              }  flex `}
            >
              {/* <div className=" border border-red-500 relative flex-1 lg:w-[500px]  flex justify-end  h-[300px] lg:h-[500px]"> */}
            <div className="w-[80%] h-[300px] md:h-[500px] md:w-[500px] border object-contain border-red-400 flex items-center text-center  bg-cover  ">
            <Image
                  layout="responsive"
                  height={10}
                  width={10}
                  className="bg-cover  w-full h-full    animate__animated animate__repeat animate__delay-1s animate__fadeIn "
                  src={d.img}
                  alt="bg"
                />
            </div>
         
             
              {/* </div> */}
              <div className=" md:px-5 lg:px-0 px-3 text-gray-700  w-full lg:relative absolute lg:w-fit">
                <div
                  className={` ${
                    index % 2 == 0
                      ? "text-left"
                      : " flex-col justify-end flex items-end "
                  }`}
                >
                  <p
                    className={`${
                      index % 2 == 0 ? "text-left" : "text-right "
                    } w-fit    right-0 animate__animated animate__repeat animate__delay-0.9s  animate__fadeInUpBig md:text-xl lg:text-3xl md text-[18px] mb-5`}
                  >
                    {d.textHead}
                  </p>

                  <div
                    className={`${
                      index % 2 == 0
                        ? "text-left lg:w-fit md:w-1/2 w-1/2"
                        : "text-right w-fit flex justify-end "
                    }  w-fit xl:text-3xl animate__animated animate__repeat animate__delay-1s  animate__fadeInUp lg:text-4xl text-[16px] md:text-2xl    font-bold`}
                  >
                    <p
                      className={`${
                        index % 2 == 0
                          ? " lg:w-3/4 md:w-full w-3/4 "
                          : "text-right b  lg:w-[80%] md:w-3/4 w-3/4 "
                      }`}
                    >
                      {d.mainText}
                    </p>
                  </div>
                  <div
                    className={`${
                      index % 2 == 0 ? "justify-start" : "justify-end"
                    }   animate__animated animate__repeat animate__delay-2s animate__fadeInUp  lg:mt-7   w-fit flex `}
                  >
                    <GlobalButton text={"Shop Now"} />
                  </div>
                </div>
              </div>
              <button
                className={`${
                  hover ? "block animate__fadeInRight" : " hidden "
                }   left-4 animate__animated animate__repeat animate__delay-0.9s group-hover:duration-1000 custom-prev absolute top-1/2 -translate-y-1/2  bg-red-700 text-white  w-10   h-10 hover:bg-gray-600`}
              >
                &#8592;
              </button>
              <button
                className={`${
                  hover ? "block animate__fadeInLeft" : "hidden "
                }  animate__animated animate__repeat animate__delay-0.9s  custom-next absolute top-1/2 right-4 -translate-y-1/2 bg-red-700 text-white w-10  h-10  hover:bg-gray-600`}
              >
                &#8594;
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
