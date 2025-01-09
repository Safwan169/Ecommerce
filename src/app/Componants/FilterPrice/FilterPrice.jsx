// import { Box, Slider } from '@mui/material';
import React from "react";
import { BsArrows } from "react-icons/bs";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const FilterPrice = ({ maxPrice, setPriceRange }) => {
  // const [value, setValue] = React.useState([0, set || maxPrice]);

  // const handlePriceValue = () => {};
  return (
    <>
      <h1 className="text-xl mb-3">Price</h1>
      <p>The highest price is ${maxPrice}</p>

     <form action="">
     <div className="flex gap-1 items-center justify-center ">
        <input
          className="border text-center w-16 p-2 "
          type="text"
          placeholder="Min"
          name="min"
          id=""
        />
        <BsArrows />

        <input
          className="border text-center w-16 p-2"
          type="text"
          placeholder="Max"
          name="max"
          id=""
        />
        <button className="text-red-700">
        <IoIosArrowDroprightCircle size={30} />

        </button>
      </div>
     </form>


    </>
  );
};

export default FilterPrice;
