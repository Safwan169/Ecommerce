import React from "react";
import { data } from "./ServiceText"
import Image from "next/image";
// gddg
const Services = () => {


  return (
    <div className=" duration-300 ">
      <div className="w-full px-5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:gap-5 gap-7">
        {data.map((feature, index) => (
          <div key={index} className={`  ${`${index<3 &&"xl:border-r"} ${index%2==0&&'md:border-r'}  border-gray-300 border-separate`}group `}>
            <div className="flex gap-3 justify-center items-center">
              <Image width={50} height={50} className=" transition-transform duration-300 group-hover:scale-125 " src={feature.icon} alt="" />
              <div className="text-[18px]">
                <p className="font-semibold text-gray-700 ">{feature.header}</p>
                <p className="text-gray-500 text-xs ">{feature.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
