'use client'
 
import { useContext } from "react";

import {my_context} from "@/app/GlobalDataShere/ContextProvider"
import ProductCard from "../../Componants/card/ProductCard";
import Link from "next/link";


const Page = () => {
    const { cart,wishListData} = useContext(my_context);
  console.log(wishListData,'here is the wish list data');

  if(wishListData?.length<1){

    return <div className=" min-h-48 text-xl  items-center flex-col sm:flex-row flex justify-center gap-1"><span>Your wishlist is empty</span>    <Link href={'/allProducts'} className="border-b hover:text-red-700 hover:border-red-700 duration-300 border-black ">  return to store</Link></div>
  }
  return <div
  className=" text-center min-h-96">


  {
    wishListData?.map((datas,index) => (
      <ProductCard key={index} data={datas}/>))
  }



  
  
  </div>;
};

export default Page;
