'use client'
import { useContext } from "react";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { my_context } from "../GlobalDataShere/ContextProvider";

const CardButton = ({ data }) => {

  const {addItemToCart}=useContext(my_context)
  const buttonData = [
    { id: 1, icon: <FaRegHeart size={20} />, action: "Add to Wishlist" },
    { id: 2, icon: <FaRegEye size={20} />, action: "View Details" },
    { id: 3, icon: <TiShoppingCart size={20} />, action: "Add to Cart" },
  ];




  const handleButton = (index) => {
   if(index ===1){
    return
   }
    else if(index ===2){
return
    }
    else if(index ===3){
     addItemToCart(
     { product: data.id,
      name: data.name,
      image: data.image,
      brand:data.brand,
      price: data.price}
     )
    }
  // console.log(addItemToCart,index)
  };
  return (
    <>
      {buttonData.map((button, index) => (
        <button
          onClick={() => handleButton(button.id)}
          key={index}
          className={`bg-red-700 duration-300 text-white p-2  hover:bg-black  `}
          // here is styled
          // style={{
          //   animationDelay: `10s`, // Delay for staggered animation
          //   animationDuration: "0.5s", // Smooth animation duration
          // }}
        >
          {button.icon} {/* Display the icon */}
        </button>
      ))}
    </>
  );
};

export default CardButton;