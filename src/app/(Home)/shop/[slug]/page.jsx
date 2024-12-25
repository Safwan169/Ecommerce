"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "../../../Componants/card/ProductCard";
import Breadcrumb from "../../../Componants/Breadcrumb/Breadcrumb";
import Loading from "../../../Componants/Loading/Loading";

const SearchAllProducts = () => {
  const { slug } = useParams();
  // console.log(slug,'search bar text')
const [searchData,setSearchData]=useState()
const [loading,setLoading]=useState(true)
  useEffect(() => {
    const func = async () => {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:5000/search?value=${slug}`
      );
      setSearchData(res?.data)
      setInterval(()=>setLoading(false), 500
    )
    };
    func();
  }, [slug]);
  console.log(searchData);
  if(loading) return <div className="min-h-96 mt-10 flex items-center"> <Loading/></div>


  return (<div className="min-h-80 mt-5 ">

    <div className="ml-5" >
      <Breadcrumb text={slug} />
    </div>

    <div className="flex flex-wrap mt-5 justify-center border min-h-96 items-center sm:mt-10">

      {

        searchData?.length > 0?searchData?.map((d,index)=>
          <ProductCard key={index} data={d} />
        ):<span className="text-center w-full text-xl sm:text-2xl text-gray-500 mt-10" >No Product Data Available !</span>
      }
    </div>
  </div>)
};

export default SearchAllProducts;
