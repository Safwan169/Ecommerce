"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const SearchAllProducts = () => {
  const { slug } = useParams();
  // console.log(slug,'search bar text')

  useEffect(() => {
    const func = async () => {
      const res = await axios.get(
        `http://localhost:5000/search?value=${slug}`
      );
      console.log(res.data, "this is for search bar");
    };
    func();
  }, [slug]);

  return <div className="min-h-80"></div>;
};

export default SearchAllProducts;
