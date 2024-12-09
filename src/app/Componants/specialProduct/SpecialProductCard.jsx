'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../card/ProductCard";
import Loading from "../Loading/Loading"
const SpecialProductCard = () => {
  const [loading, setLoading] = useState(true);
 

  const [cardData, setCardData] = useState([]);

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

  if (loading) return <Loading/>

  return (
    <div className="grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-5">
      {cardData.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default SpecialProductCard;

