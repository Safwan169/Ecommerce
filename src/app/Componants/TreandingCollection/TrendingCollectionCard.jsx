'use client'
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { my_context } from "@/app/GlobalDataShere/ContextProvider";

import ProductCard from "../card/ProductCard";
import Loading from "../Loading/Loading"
const TrendingCollectionCard = () => {
  const [loading, setLoading] = useState();


  const [cardData, setCardData] = useState([]);
  const { trendingProduct } = useContext(my_context);


  console.log(trendingProduct,'this is come form the trending button')


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);  // for loading animation
        const res = await axios.get(`https://electron-server-eta.vercel.app/CardData/${trendingProduct}`);
        setCardData(res.data.products);

        console.log(res.data,'this is form next js server ')
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchData();
  }, [trendingProduct]);

  if (loading) return <Loading/>

  return (
    <div className="flex flex-wrap gap-5">
      {cardData.map((item) => (
        <ProductCard key={item.id} button={trendingProduct}  data={item} />
      ))}
    </div>
  );
};

export default TrendingCollectionCard;
