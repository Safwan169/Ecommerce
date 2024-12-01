"use client"
import React, { useContext, useState } from "react";
import { my_context } from "../GlobalDataShere/ContextProvider";

const TrandingButton = ({data}) => {
  const [text,setText]=useState(0)
const {setTrendingProduct}=useContext(my_context)

  return (
    <div className="lg:flex-row md:flex-row flex-col   md:space-x-4  lg:space-x-4   text-center space-y-2 sm:space-y-0  md:justify-center lg:justify-center py-4">
      {data.map((button, index) => (
        <button  onClick={()=>{setText(index) ,setTrendingProduct(index)}}
          key={index}
          className={`px-6 py-3 ${text==index ?`bg-[#333333] text-white`:'bg-red-600 text-white'} font-bold uppercase tracking-wide duration-500 hover:bg-[#333333] transition `}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default TrandingButton;
