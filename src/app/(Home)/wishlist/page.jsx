"use client";

import { useContext } from "react";

import { my_context } from "@/app/GlobalDataShere/ContextProvider";
import ProductCard from "../../Componants/card/ProductCard";
import Link from "next/link";
import HeaderText from "../../Componants/HeaderText/HeaderText";
import Breadcrumb from "../../Componants/Breadcrumb/Breadcrumb";

const Page = () => {
  const { wishListData } = useContext(my_context);
  console.log(wishListData, "here is the wish list data");


  return (
    <>

    <div className=" mt-4 sm:mt-10 px-5 sm:px-20">
    <Breadcrumb text={"Wishlist"} />

    </div>
      {wishListData?.length < 1 ? (
        <div className=" min-h-60 text-xl  items-center flex-col sm:flex-row flex justify-center gap-1">
          <span>Your wishlist is empty</span>{" "}
          <Link
            href={"/allProducts"}
            className="border-b hover:text-red-700 hover:border-red-700 duration-300 border-black "
          >
            return to store
          </Link>
        </div>
      ) : (
        <div className=" text-center min-h-96">
          <HeaderText text={"Treanding Collection"} />
          <div className="flex-wrap flex justify-center">
            {wishListData?.map((datas, index) => (
              <ProductCard key={index} data={datas} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
