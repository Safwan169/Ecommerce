"use client";

import { useContext } from "react";

import { my_context } from "@/app/GlobalDataShere/ContextProvider";
import ProductCard from "../../Componants/card/ProductCard";
import Link from "next/link";
import HeaderText from "../../Componants/HeaderText/HeaderText";
import Breadcrumb from "../../Componants/Breadcrumb/Breadcrumb";
import EmptyCardText from "../../Componants/Cart/Shared/EmptyCardText/EmptyCardText";

const Page = () => {
  const { wishListData } = useContext(my_context);
  // console.log(wishListData, "here is the wish list data");


  return (
    <>

    <div className=" mt-4 sm:mt-10 px-5 sm:px-20">
    <Breadcrumb text={"Wishlist"} />

    </div>
      {wishListData?.length < 1 ? (
       <EmptyCardText cartName={'Wishlist'}/>
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
