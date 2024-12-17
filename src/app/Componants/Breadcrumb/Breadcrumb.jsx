import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Breadcrumb = ({ text }) => {
  return (
    <div className="flex text-[14px] sm:text-[16px] gap-2 items-center">
      <Link href={'/'} className="font-semibold">Home</Link >
      <FaLongArrowAltRight />
      <span className="font-medium text-red-700">{text}</span>
    </div>
  );
};

export default Breadcrumb;
