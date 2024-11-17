"use client"
import React, { useState } from "react";

const ProductButtons = ({data}) => {
  const [text,setText]=useState(0)


  return (
    <div className="flex space-x-4 justify-center py-4">
      {data.map((button, index) => (
        <button  onClick={()=>setText(index)}
          key={index}
          className={`px-6 py-3 ${text==index ?`bg-[#333333] text-white`:'bg-red-600 text-white'} font-bold uppercase tracking-wide duration-500 hover:bg-[#333333] transition `}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default ProductButtons;
