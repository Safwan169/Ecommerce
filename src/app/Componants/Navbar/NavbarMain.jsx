import React from 'react';
import { FiPhone, FiSearch, FiShoppingCart, FiHeart, FiUser } from 'react-icons/fi';
import { FaLock, FaGift } from 'react-icons/fa';

function NavbarMain() {
  return (
    <header className=''>
      {/* Top Info Bar */}
      <div className="bg-gray-100">
       <div className='  py-2 px-4 flex justify-around items-center text-sm text-gray-700'>
       <div className='border border-red-600'>
          Need help? Call us: <span className="text-red-600">(+92) 0123 456 789</span>
        </div>
        <div className='border border-red-600'>
          Today's deal sale 50% off <span className="text-red-600 font-semibold">SHOP NOW!</span>
        </div>
        
        {/* Right-side Icons */}
        <div className="flex items-center space-x-4">
          <FiUser className="text-gray-600 cursor-pointer" />
          <FiHeart className="text-gray-600 cursor-pointer" />
         
        </div>
       </div>
      </div>

      {/* Main Navbar */}
      <div className=" bg-white py-4 px-4 flex items-center justify-around">
        {/* Logo */}
        <div className=" flex items-center space-x-2">
          <div className="text-red-600 font-bold text-2xl">E</div>
          <div className="font-bold text-xl">Electon</div>
        </div>

        {/* Main Links */}
        <nav className="hidden md:flex space-x-8 text-gray-700">
          <div className="relative group">
            <a href="#" className="hover:text-red-600">Home</a>
            {/* Dropdown for Home */}
            <div className="absolute left-0 mt-1 hidden group-hover:block bg-white border border-gray-200 rounded shadow-lg">
              {/* Dropdown items go here */}
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="hover:text-red-600">Shop</a>
          </div>
          <a href="#" className="hover:text-red-600">Collection</a>
          <a href="#" className="hover:text-red-600">Blog</a>
          <div className="relative group">
            <a href="#" className="hover:text-red-600">Pages</a>
          </div>
        </nav>
        <div className="flex items-center space-x-1 text-red-600">
            <FiPhone />
            <span>(+92) 0123 456 789</span>
          </div>

      </div>

      {/* Secondary Options Bar */}
      <div className="bg-gray-900 text-white py-3 px-6 flex items-center space-x-8">
        {/* Categories */}
        <button className="bg-red-600 py-2 px-4 font-semibold flex items-center space-x-2">
          <span>TOP CATEGORIES</span>
          <span className="text-xl">☰</span>
        </button>

        {/* Secure Payment and Gift Voucher */}
        <div className="flex items-center space-x-8 text-sm">
          <div className="flex items-center space-x-1">
            <FaLock />
            <span>SECURE PAYMENT</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaGift />
            <span>GIFT VOUCHER</span>
          </div>
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
        <div className="bg-red-600 py-2 px-4 font-semibold flex items-center space-x-1">
          <FiShoppingCart />
          <span>0 Item $0.00</span>
        </div>
      </div>
    </header>
  );
}

export default NavbarMain;
