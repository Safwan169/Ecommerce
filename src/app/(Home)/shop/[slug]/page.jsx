"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import ProductCard from "../../../Componants/card/ProductCard";
import Breadcrumb from "../../../Componants/Breadcrumb/Breadcrumb";
import Loading from "../../../Componants/Loading/Loading";
// import Brand from "../../../Componants/Brand/Brand";
import FilterProductSize from "../../../Componants/FilterProductSize/FilterProductSize";
import FilterPrice from "../../../Componants/FilterPrice/FilterPrice";
import { my_context } from "../../../GlobalDataShere/ContextProvider";

const SearchAllProducts = () => {
  const { slug } = useParams();
  // console.log(slug,'search bar text')
  const [searchData, setSearchData] = useState('');
  const [loading, setLoading] = useState('');

  const [totalProducts, setTotalProducts] = useState('');

  const {  setBrand, setMaxPrice, maxPrice } = useContext(my_context);

  const [getPriceRange, setPriceRange] = useState('');

  // const [getBrand, setBrandCheck] = useState('');
  console.log(getPriceRange, "price range");

  // console.log(Brands ,getBrand,'this is for brands errors')
  useEffect(() => {
    const func = async () => {
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/search?value=${slug}&priceMax=${getPriceRange[1]?.max || 0}&priceMin=${getPriceRange[0]?.min || 0}`);

      console.log(res?.data, "this is for maxprice ");
      setSearchData(res?.data?.allProducts);
      setMaxPrice(res?.data?.maxPrice);
      setBrand(res?.data?.brand);
      setTotalProducts(res?.data?.totalProducts);
      setInterval(() => setLoading(false), 500);
    };
    func();
  }, [slug,getPriceRange[1]?.max]);

  // console.log(searchData, "tihs is for searching");
  if (loading)
    return (
      <div className="min-h-96 mt-10 flex items-center">
        {" "}
        <Loading />
      </div>
    );

  // console.log(Brand, "this is for brand");

  return (
    <>
      <div className="min-h-80  z-0 mt-5 ">
        <div className="ml-5">
          <Breadcrumb text={slug} />
        </div>

        <div className="flex">
          <div className="mt-10 pl-5 space-y-6">
            <FilterProductSize size={totalProducts} />
            <div>
              <h1 className="  text-xl">Brands</h1>

              {/* {[...Brands, "sf"]?.map((data, index) => (
                <Brand key={index} setBrandCheck={setBrandCheck} data={data} />
              ))} */}
            </div>
            <FilterPrice setPrice={setPriceRange} maxPrice={maxPrice} />
          </div>

          <div className="flex flex-wrap mt-5  w-full justify-center   min-h-96 items-center sm:mt-10">
            {searchData?.length > 0 ? (
              searchData?.map((d, index) => (
                <ProductCard key={index} data={d} />
              ))
            ) : (
              <span className="text-center w-full text-xl sm:text-2xl text-gray-500 mt-10">
                No Product Data Available !
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchAllProducts;
