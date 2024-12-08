"use client";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS CSS
import React, { useContext, useEffect, useState } from "react";
import { FiSearch, FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import { MdOutlineSupportAgent } from "react-icons/md";
import Slider from "./Slider";
import { data } from "./sliderText";
import TopCategories from "./Top-Categories/TopCategories";
import Image from "next/image";
import { my_context } from "../GlobalDataShere/ContextProvider";

function NavbarMain() {
  const [isLoad, setIsload] = useState(false);
  const { setCart,cart,wishListData } = useContext(my_context);


  const total=cart?.cartItems?.reduce((acc,current)=>acc+current?.price,0).toFixed(0)||0 

//  console.log(cart.cartItems,"here is the cart form local storage ") 
  useEffect(() => {
    AOS.init({ duration: 1000 });
    let cursor = 0;
    const handelNavbar = () => {
      const data = window.pageYOffset || document.documentElement.scrollTop;
      if (data < cursor) {
        document.querySelector(".sf").classList.add("top-0");
        // document.querySelector('.sf').classList.add("relative")

        document.querySelector(".sf").classList.add("fixed");
        setIsload(true);

        if (data < 200) {
          document.querySelector(".sf").classList.remove("fixed");

          document.querySelector(".top-bar").classList.remove("hidden");
        }
      } else {
        // console.log("down");

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
    <div className="w-full transition-transform   bg-white duration-1000 z-50 sf ">
      <header className={`z-50 pt-0     `}>
        {/* Top Info Bar */}
        <div className="bg-gray-100 top-bar z-50 md:px-5 lg:px-0 lg:w-full xl:w-[1400px]    mx-auto ">
          <div className="    flex justify-between  items-center text-sm text-gray-700">
            <div>
              Need help? Call us:{" "}
              <span className="hover:text-red-700 cursor-pointer">
                (+92) 0123 456 789
              </span>
            </div>
            <div className="lg:block hidden -translate-x-1/3 relative">
              Today&apos;s deal sale 50% off{" "}
              <span className="text-red-700 cursor-pointer  hover:text-gray-800 font-semibold">
                SHOP NOW!
              </span>
            </div>

            {/* Right-side Icons */}
            <div className="flex items-center space-x-2 text-red-700">
              <MdOutlineSupportAgent size={25} />
              <span className="text-black font-semibold">
                {" "}
                (+92) 0123 456 789
              </span>
            </div>
          </div>
        </div>

        <div
          className={`${
            isLoad
              ? " transition-all animate__animated animate__fadeInDown delay-3s z-50 mt-0 border-red-700  "
              : " animate__fadeIn animate__animated delay-0 z-50 "
          }`}
        >
          {/* Main Navbar */}
          <div className=" bg-white py-4 lg:w-full xl:w-[1400px] md:px-5 lg:px-0 mx-auto  flex items-center justify-between">
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
                <a href="#" className="hover:text-red-700">
                  Home
                </a>
                {/* Dropdown for Home */}
                <div className="absolute left-0 mt-1 hidden group-hover:block bg-white border border-gray-200 rounded shadow-lg">
                  {/* Dropdown items go here */}
                </div>
              </div>
              <div className="relative group">
                <a href="#" className="hover:text-red-700">
                  Shop
                </a>
              </div>
              <a href="#" className="hover:text-red-700">
                Collection
              </a>
              <a href="#" className="hover:text-red-700">
                Blog
              </a>
              <div className="relative group">
                <a href="#" className="hover:text-red-700">
                  Pages
                </a>
              </div>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="flex cursor-pointer  hover:text-red-700 items-center gap-1">
                <FiUser className=" cursor-pointer" />
                <span>sign In</span>
              </div>
              <span>|</span>
              <div className="flex relative cursor-pointer  hover:text-red-700 items-center gap-1 ">
                <FiHeart className="  cursor-pointer" />
                <span>Wishlist</span>

                <span className="absolute -top-2 left-2 bg-red-700 rounded-full text-xs  w-4 h-4 flex justify-center text-white">{ wishListData?.length ||0}</span>
              </div>
            </div>
          </div>

          {/* Secondary Options Bar */}
          <div className="bg-[#2c2b49]   ">
            <div className="lg:w-full xl:w-[1400px]   mx-auto z-50  text-white flex items-center md:space-x-3 lg:space-x-3">
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
                <button className="absolute right-0 top-0 bottom-0 bg-red-700   px-4 text-white">
                  <FiSearch size={16} />
                </button>
              </div>

              {/* Cart */}
              <div onClick={() => setCart(true)} className=" cursor-pointer md:w-[150px] lg:w-[200px] lg:text-[17px]  bg-red-700 py-3 px-4 font-semibold flex justify-center items-center space-x-2">
                <FiShoppingCart size={20} />
                <span  ><span>{cart?.cartItems?.reduce((acc,current)=>acc + current?.quantity , 0)||0}</span> Item $<span>{total}</span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavbarMain;


