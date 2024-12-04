import React from 'react'
import { FaRegEye, FaRegHeart } from 'react-icons/fa';
import { TiShoppingCart } from 'react-icons/ti';

const CardButton = ({data}) => {
    const buttonData = [
        { id: 1, icon: <FaRegHeart size={20} />, action: "Add to Wishlist" },
        { id: 2, icon: <FaRegEye  size={20}/>, action: "View Details" },
        { id: 3, icon: <TiShoppingCart size={20}/>, action: "Add to Cart" },
      ];




       const handleButton = (index) => {
    console.log(index)
      }
  return (
    <>
       {buttonData.map((button, index) => (
            <button onClick={()=>handleButton(index) }
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
  )
}

export default CardButton
