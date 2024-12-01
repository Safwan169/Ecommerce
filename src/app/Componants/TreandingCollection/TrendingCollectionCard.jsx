'use client'
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { my_context } from "../GlobalDataShere/ContextProvider";
import ProductCard from "../card/ProductCard";

const TrendingCollectionCard = () => {
  const { trendingProduct } = useContext(my_context);
  console.log(trendingProduct);

  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/CardData");
        setCardData(res.data.productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-5">
      {cardData.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default TrendingCollectionCard;
