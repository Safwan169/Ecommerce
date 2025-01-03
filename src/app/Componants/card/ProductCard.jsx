import React from "react";
import "animate.css";
import CardButton from './CardButton'
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css"; // CSS ফাইল ইম্পোর্ট


const ProductCard = ({data,button}) => {

  // console.log(data,'from Product')
  // Button data array

  
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };

  return (
    <div className="group relative mx-auto   bg-white -z-10 p-2 sm:p-4 w-full sm:w-64 text-center">
    {/* Product Image */}
    <div className="relative z-0  max-w-[500px]">
      <img
        src={data?.image}
        loading="lazy"
        alt="Product"
        className="w-full z-0 object-cover"
      />

      <div className=" bg-gray-800  p-1 px-3 text-xs absolute text-white top-1 right-5 sm:right-1">
       {button==0?<span>New</span>:<span>{button==1?<span>Featured</span>:<span> -{data?.discount}%</span>}</span>}
      </div>
      {/* Buttons (Hidden by default, shown on hover for this card only) */}
      <div className="absolute inset-0 flex justify-center items-end space-x-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-10 transition-all duration-700">
        <CardButton data={data} />
      </div>
    </div>
  
    {/* Product Details */}
    <div className="mt-4">
      {/* Rating */}
      <span className="w-full justify-center flex mt-3 items-center gap-1 text-gray-800">
        <Rating
          itemStyles={myStyles}
          readOnly
          style={{ maxWidth: 100 }}
          value={data?.rating || 5}
        />
      </span>
  
      {/* Product Name */}
      <h3 className="text-sm font-medium text-gray-500">{data?.name}</h3>
  
      {/* Pricing */}
      <div className="mt-1">
        <span className="text-gray-600 font-bold text-lg">${data?.price}</span>
        <span className="text-gray-400 line-through ml-2">${data?.previousPrice}</span>
      </div>
    </div>
  </div>
  
  );
};

export default ProductCard;
