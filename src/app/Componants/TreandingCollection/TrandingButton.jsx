"use client";
import { useContext, useState } from "react";
import { my_context } from "../GlobalDataShere/ContextProvider";

const TrandingButton = ({ data }) => {
  const [text, setText] = useState(0);
  const { setTrendingProduct } = useContext(my_context);

  const handleClick = (index) => {
    setText(index); // Update local state for text
    setTrendingProduct(index); // Call the context function to update trending product
  };

  return (
    <div className="flex-1  sm:justify-center  items-center space-x-4 px-5 text-center  space-y-2 sm:space-y-0  py-4">
      {data.map((button, index) => (
        <button
          onClick={() => handleClick(index)} // Using the new handler
          key={index}
          className={`${
            text === index ? `bg-[#333333] text-white` : 'bg-red-700 text-white'
          } w-fit px-6 py-3 font-bold uppercase tracking-wide duration-500 hover:bg-[#333333] transition`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default TrandingButton;
