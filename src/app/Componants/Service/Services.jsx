import React from "react";
import {data} from "./services"

const Services = () => {


  return (
    <div className="py-10 px-4   duration-300 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((feature, index) => (
     <div className= {`${index < 3 && 'border-r'}group `}>
        <div key={index} className="flex gap-3 justify-center items-center">
        <img className="w-10 h-10  transition-transform duration-300 group-hover:scale-125 text-red-500 " src={feature.icon} alt="" />
        <div>
          <p className="font-semibold">{feature.header}</p>
          <p>{feature.text}</p>
        </div>
       </div>
     </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
