"use client";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS CSS
import React, { useContext, useEffect, useState } from "react";
import { FiSearch, FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import { MdOutlineSupportAgent } from "react-icons/md";
import Slider from "./Slider";
import { data } from "./sliderText";
import TopCategories from "./Top-Categories/TopCategories";
import { my_context } from "@/app/GlobalDataShere/ContextProvider";
import LogoName from "./Logo & Name/LogoName";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Categories from "./Top-Categories/Categories";
function NavbarMain() {
  const [isLoad, setIsload] = useState(false);
  const { setCart, cart, wishListData, leftSliderData, setLeftSliderData } =
    useContext(my_context);
  const total =
    cart?.cartItems
      ?.reduce((acc, current) => acc + current?.price * current?.quantity, 0)
      .toFixed(0) || 0;

  useEffect(() => {
    AOS.init({ duration: 1000 }); // AOS animation initialization
    let cursor = 0;

    const handelNavbar = () => {
      const data = window.pageYOffset || document.documentElement.scrollTop;
      if (data < cursor) {
        document.querySelector(".sf").classList.add("top-0");
        document.querySelector(".sf").classList.add("fixed");
        setIsload(true);

        if (data < 200) {
          document.querySelector(".sf").classList.remove("fixed");
          document.querySelector(".top-bar").classList.remove("hidden");
        }
      } else {
        document.querySelector(".sf").classList.remove("fixed");
        document.querySelector(".top-bar").classList.add("hidden");
        setIsload(false);
      }

      cursor = data;
    };

    // Adding the scroll event listener
    window.addEventListener("scroll", handelNavbar);
  }, []);

  const navigate = useRouter();

  // function for search bar for product search
  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    console.log(
      searchValue,
      "here is the value for search bar for product search",
      navigate
    );

    navigate.push(`/shop/${searchValue || "Products"}`);

    e.target.search.value = "";
  };

  return (
    <div className="w-full transition-transform   bg-white duration-1000 z-50 sf ">
      <header className={`z-50 pt-0     `}>
        {/* Top Info Bar */}
        <div className=" bg-gray-100 top-bar z-50 md:px-5 lg:px-2 lg:w-full xl:w-[1400px]    mx-auto ">
          <div className="  hidden  sm:flex justify-between  items-center text-sm text-gray-700">
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
          <div className=" sm:hidden block mx-auto w-full   text-center p-2  font-serif text-gray-700">
            <div className=" ">Welcome To The Electron - Store</div>
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
          <div className=" px-3 bg-white py-4 justify-between lg:w-full xl:w-[1400px] md:px-5 lg:px-2 mx-auto  flex items-center sm:justify-between">
            <div
              onClick={() => setLeftSliderData(!leftSliderData)}
              className="block sm:hidden"
            >
              {/* here will come navbar left slider for small devices  */}

              <RxHamburgerMenu size={25} />
            </div>

            {/* Logo */}

            <LogoName />

            {/* cart for small devices */}
            <div
              onClick={() => setCart(true)}
              className="block relative sm:hidden"
            >
              <FiShoppingCart className="text-gray-600 mr-1" size={25} />
              <span className="absolute -top-2 bg-red-700 text-white rounded-full w-4 h-4 text-xs text-center p-[1px] right-0">
                {cart?.cartItems?.reduce(
                  (acc, current) => acc + current?.quantity,
                  0
                ) || 0}
              </span>
            </div>
            {/* Main Links */}
            <nav className="hidden md:flex space-x-8  text-gray-700">
              <div className="relative group">
                <Link href="/" className="hover:text-red-700">
                  Home
                </Link>
                {/* Dropdown for Home */}
                <div className="absolute left-0 mt-1 hidden group-hover:block bg-white border border-gray-200 rounded shadow-lg">
                  {/* Dropdown items go here */}
                </div>
              </div>
              <div className="relative group">
                <a
                  onClick={handleSearch}
                  className="cursor-pointer hover:text-red-700"
                >
                  Shop
                </a>
              </div>
              <Link href={"/collection"} className="hover:text-red-700">
                Collection
              </Link>
              <a href="#" className="hover:text-red-700">
                Blog
              </a>
              <div className="relative group">
                <a href="#" className="hover:text-red-700">
                  Pages
                </a>
              </div>
            </nav>
            <div className="hidden sm:flex items-center space-x-4">
              <div className="flex cursor-pointer  hover:text-red-700 items-center gap-1">
                <FiUser className=" cursor-pointer" />
                <span>sign In</span>
              </div>
              <span>|</span>
              <Link
                href={"/wishlist"}
                className="flex relative cursor-pointer  hover:text-red-700 items-center gap-1 "
              >
                <FiHeart className="  cursor-pointer" />
                <span>Wishlist</span>

                <span className="absolute -top-2 left-2 bg-red-700 rounded-full text-xs  w-4 h-4 flex justify-center text-white">
                  {wishListData?.length || 0}
                </span>
              </Link>
            </div>
          </div>

          {/* Secondary Options Bar */}
          <div className="bg-[#2c2b49]   ">
            <div className="lg:w-full xl:w-[1400px]  lg:px-2 mx-auto z-50  text-white flex items-center md:space-x-3 lg:space-x-3">
              {/*Top Categories */}

              <div className="hidden relative z-50 lg:block">
                <TopCategories />

                <div className="absolute w-full hidden lg:block md:hidden z-50 ">
                  <Categories />
                </div>
              </div>

              {/* this is the navbar slider  */}

              <div className="lg:w-[30%] md:w-[25%] hidden sm:block    justify-start  ">
                <Slider d={data} />
              </div>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="flex-grow flex">
                <div className="flex flex-grow p-2 sm:p-0 relative">
                  <input
                    type="text"
                    name="search"
                    placeholder="Find our product"
                    className="w-full py-2 px-4  sm:rounded-l-md  text-gray-700"
                  />
                  <button className="absolute right-0 top-0 bottom-0 bg-red-700  mr-2 sm:mr-0 my-2 sm:my-0 px-4 text-white">
                    <FiSearch size={16} />
                  </button>
                </div>
              </form>

              {/* Cart for big devices  */}
              <div
                onClick={() => setCart(true)}
                className=" hidden cursor-pointer md:w-[150px] lg:w-[150px]  xl:w-[200px]  bg-red-700 py-3 px-2 font-semibold sm:flex justify-center items-center space-x-2"
              >
                <FiShoppingCart size={20} />
                <span>
                  <span>
                    {cart?.cartItems?.reduce(
                      (acc, current) => acc + current?.quantity,
                      0
                    ) || 0}
                  </span>{" "}
                  Item $<span>{total}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavbarMain;
