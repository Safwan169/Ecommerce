import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="bg-gray-100 pb-14 sm:pb-0  w-full pt-8">
    <div className="lg:w-full lg:px-3 lg:pl-10  mx-auto">
      {/* Footer Links Section */}
      <div
        className="grid grid-cols-2 lg:p-24 p-6 md:pl-20 lg:px-0 sm:grid-cols-3 
        lg:grid-cols-5 gap-8"
      >
        {/* Contact Us Section */}
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-4">Contact us</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-center space-x-2">
              <FiMapPin className="text-red-600" />
              <span>1093 Marigold Lane, Coral Way, Miami, Florida, 33169</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiPhone className="text-red-600" />
              <span>610-403-403</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiMail className="text-red-600" />
              <span>demo@demo.com</span>
            </li>
          </ul>
        </div>
  
        {/* Information Section */}
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-4">Information</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <a href="#" className="hover:text-red-600">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Delivery information
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Terms & conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Brands
              </a>
            </li>
          </ul>
        </div>
  
        {/* My Account Section */}
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-4">My account</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <a href="#" className="hover:text-red-600">
                Login & register
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Order history
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Newsletter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Specials
              </a>
            </li>
          </ul>
        </div>
  
        {/* Customer Care Section */}
        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="font-bold text-lg text-gray-800 mb-4">Customer care</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <a href="#" className="hover:text-red-600">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Return policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Sitemap
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Gift certificates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Affiliate
              </a>
            </li>
          </ul>
        </div>
  
        {/* Electon Legal Section */}
        <div className="">
          <h3 className="font-bold text-lg text-gray-800 mb-4">Electon legal</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <a href="#" className="hover:text-red-600">
                Return policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Payment policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Advertising
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Contact store
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Help & support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="w-full bg-[#2c2b49]">
      <div className="lg:w-full lg:px-5 px-0 mx-auto">
        <div
          className="p-8 px-0 border-t text-white border-gray-300 pt-4 flex flex-col lg:flex-row 
          justify-between items-center text-sm"
        >
          <p>© 2024, Ecommerce by Spacingtech™</p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            {/* Payment Icons */}
            <img
              src="/bkash.png"
              alt="Visa"
              className="w-fit p-1 bg-white h-8"
            />
            <img
              src="/nogad.svg"
              alt="Paypal"
              className="w-fit p-1 bg-white h-8"
            />
            <img
              src="/Rocket.png"
              alt="Mastercard"
              className="w-fit p-1 bg-white h-8"
            />
            <img
              src="/duchBangla.png"
              alt="American Express"
              className="w-fit p-1 bg-white h-8"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  );
}

export default Footer;
