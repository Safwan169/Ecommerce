"use client";
import { CiUser } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";

import { BsShop } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { my_context } from "@/app/GlobalDataShere/ContextProvider";
import { useContext } from "react";
import Link from "next/link";

export default function FixedBottomNavigation() {

    const {wishListData}=    useContext(my_context);
    // console.log(wishListData);

  return (
    <div className="z-50 flex fixed  bottom-0 pt-3 text-gray-500 justify-evenly bg-white w-full">
      <Link  href={'/'} className=" ">
        <IoHomeOutline className="mx-auto" size={25} />
        <label className="font-bold text-xs" htmlFor="">HOME</label>
      </Link >
      <Link href={'/wishlist'}  className="relative">
        <FiHeart className="mx-auto" size={25}/>
        <span className="absolute -top-2 bg-red-700 rounded-full text-white w-4 h-4 text-center right-1 ">{wishListData?.length ||0}</span>
        <label className="font-bold text-xs" htmlFor="">WISHLIST</label>

      </Link >
      <Link href={'/collection'} >
        <BsShop className="mx-auto" size={25} />
        <label className="font-bold text-xs" htmlFor="">SHOP</label>

      </Link >
      <Link  href={'/login'} >
        <CiUser className="mx-auto" size={25}/>
        <label className="font-bold text-xs" htmlFor="">LOGIN</label>

      </Link >
    </div>
  );
}
