import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Breadcrumb = ({ text }) => {
  return (
    <div className="flex text-[14px] sm:text-[16px] gap-2 items-center">
      <span className="font-semibold">Home</span>
      <FaLongArrowAltRight />
      <span className="font-medium text-red-700">{text}</span>
    </div>
  );
};

export default Breadcrumb;
