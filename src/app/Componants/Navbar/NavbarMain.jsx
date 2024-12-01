"use client";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS CSS
import React, { useEffect, useState } from "react";
import { FiSearch, FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import { MdOutlineSupportAgent } from "react-icons/md";
import Slider from "./Slider";
import { data } from "./sliderText";
import TopCategories from "./Top-Categories/TopCategories";
import Image from "next/image";

function NavbarMain() {
  const [isLoad, setIsload] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 });
    let cursor=0

    const handelNavbar = () => {

      const data =  window.pageYOffset || document.documentElement.scrollTop;
      if (data < cursor) {


        document.querySelector('.sf').classList.add("top-0")
        // document.querySelector('.sf').classList.add("relative")


        document.querySelector(".sf").classList.add("fixed");
        setIsload(true);



        if(data < 200){
          document.querySelector(".sf").classList.remove("fixed");

          
          document.querySelector(".top-bar").classList.remove("hidden");
  
        }
      } else {
        console.log('down');

        
        document.querySelector(".sf").classList.remove("fixed");
        document.querySelector(".top-bar").classList.add("hidden");

      

        setIsload(false);
      }
     
      cursor = data; 
    };

    window.addEventListener("scroll", handelNavbar);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full transition-transform  bg-white duration-1000 z-50 sf ">
      <header className={`z-50 pt-0     `}>
        {/* Top Info Bar */}
        <div className="bg-gray-100 top-bar z-50 lg:w-full xl:w-[1400px]    mx-auto ">
          <div className="    flex justify-between  items-center text-sm text-gray-700">
            <div>
              Need help? Call us:{" "}
              <span className="hover:text-red-500 cursor-pointer">
                (+92) 0123 456 789
              </span>
            </div>
            <div className=" -translate-x-1/3 relative">
              Today&apos;s deal sale 50% off{" "}
              <span className="text-red-600 cursor-pointer  hover:text-gray-800 font-semibold">
                SHOP NOW!
              </span>
            </div>

            {/* Right-side Icons */}
            <div className="flex items-center space-x-4">
              <div className="flex cursor-pointer  hover:text-red-500 items-center gap-1">
                <FiUser className=" cursor-pointer" />
                <span>sign In</span>
              </div>
              <span>|</span>
              <div className="flex cursor-pointer hover:text-red-500 items-center gap-1 ">
                <FiHeart className="  cursor-pointer" />
                <span>Wishlist</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            isLoad
              ? " transition-all animate__animated animate__fadeInDown delay-3s z-50 mt-0 border-red-500  "
              : " animate__fadeIn animate__animated delay-0 z-50 "
          }`}
        >
          {/* Main Navbar */}
          <div className=" bg-white py-4 lg:w-full xl:w-[1400px]  mx-auto  flex items-center justify-between">
            {/* Logo */}
            <div className=" flex items-center space-x-2">
              {/* <div className="text-red-600 font-bold text-2xl">E</div> */}
              <Image
                width={500}
                height={500}
                className="w-[50px]"
                src="/webLogo.png"
                alt=""
              />
              <div className="font-bold text-xl">Electron</div>
            </div>

            {/* Main Links */}
            <nav className="hidden md:flex space-x-8  text-gray-700">
              <div className="relative group">
                <a href="#" className="hover:text-red-600">
                  Home
                </a>
                {/* Dropdown for Home */}
                <div className="absolute left-0 mt-1 hidden group-hover:block bg-white border border-gray-200 rounded shadow-lg">
                  {/* Dropdown items go here */}
                </div>
              </div>
              <div className="relative group">
                <a href="#" className="hover:text-red-600">
                  Shop
                </a>
              </div>
              <a href="#" className="hover:text-red-600">
                Collection
              </a>
              <a href="#" className="hover:text-red-600">
                Blog
              </a>
              <div className="relative group">
                <a href="#" className="hover:text-red-600">
                  Pages
                </a>
              </div>
            </nav>
            <div className="flex items-center space-x-2 text-red-600">
              <MdOutlineSupportAgent size={25} />
              <span className="text-black font-semibold">
                {" "}
                (+92) 0123 456 789
              </span>
            </div>
          </div>

          {/* Secondary Options Bar */}
          <div className="bg-[#2c2b49]   ">
            <div className="lg:w-full xl:w-[1400px]  mx-auto z-50  text-white flex items-center space-x-8">
              {/*Top Categories */}

              <TopCategories />
              {/* this is the navbar slider  */}

              <div className="w-[25%]   justify-start  ">
                <Slider d={data} />
              </div>

              {/* Search Bar */}
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="Find our product"
                  className="w-full py-2 px-4 rounded-l-md text-gray-700"
                />
                <button className="absolute right-0 top-0 bottom-0 bg-white text-gray-700 px-4 rounded-r-md">
                  <FiSearch />
                </button>
              </div>

              {/* Cart */}
              <div className=" cursor-pointer  bg-red-600 py-4 px-4 font-semibold flex items-center space-x-1">
                <FiShoppingCart size={20} />
                <span>0 Item $0.00</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavbarMain;
