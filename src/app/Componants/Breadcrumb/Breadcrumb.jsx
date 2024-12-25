import Link from "next/link";
import React from "react";
import { SlArrowRight } from "react-icons/sl";

const Breadcrumb = ({ text }) => {
  return (
    <div className="flex text-[14px] sm:text-[16px] gap-2 items-center">
      <Link href={"/"} className="font-semibold">
        Home
      </Link>
      <SlArrowRight size={11} />
       <span className="font-medium text-red-700">{text}</span>
    </div>
  );
};

export default Breadcrumb;
