import React from "react";
import "animate.css";
import CardButton from './CardButton'

const ProductCard = ({data}) => {

  console.log(data,'from Product')
  // Button data array


  return (
    <div className="group relative mx-auto bg-white  p-4  w-64 text-center">
      {/* Product Image */}
      <div className="relative">
        <img
          src={'watch.png'}
          loading="lazy" // Replace with your image URL
          alt="Product"
          className="w-full object-cover  rounded-lg"
        />
        {/* Buttons (Hidden by default, shown on hover with staggered animation) */}
        <div className="absolute  animate__repeat animate__animated animate__fadeInUp animate__delay-2s inset-0 flex justify-center items-end space-x-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-10 transition-all duration-500">
         <CardButton data={data}/>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-4">
        {/* Rating */}
        <div className="flex justify-center space-x-1 mb-2">
          <i className="text-yellow-400 fas fa-star"></i>
          <i className="text-yellow-400 fas fa-star"></i>
          <i className="text-yellow-400 fas fa-star"></i>
          <i className="text-gray-400 fas fa-star"></i>
          <i className="text-gray-400 fas fa-star"></i>
        </div>

        {/* Product Name */}
        <h3 className="text-sm font-medium text-gray-500" >I Phone</h3>

        {/* Pricing */}
        <div className="mt-1">
          <span className="text-gray-600 font-bold text-lg">$150.00</span>
          <span className="text-gray-400 line-through ml-2">$155.00</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
