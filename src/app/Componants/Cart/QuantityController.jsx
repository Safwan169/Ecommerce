"use client";

import { useContext, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { my_context } from "../GlobalDataShere/ContextProvider";

const QuantityController = ({ data }) => {
  const [quantity, setQuantity] = useState(data?.quantity);
  const { addItemToCart,deleteItemFromCart } = useContext(my_context);
  //this is for increment
  const handleIncrease = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);

      const cart = data?.quantity + 1;
      addItemToCart({ ...data, quantity: cart });
    }
  };

  // this is for the decrement
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);

      const cart = data?.quantity + 1;
      addItemToCart({ ...data, quantity: cart });
    }
  };

  // this is for cart delete from local storage

  const handelDelete=((id)=>{
    deleteItemFromCart(id)

  })
  return (
    <div className=" items-center flex">
      <p className="flex border justify-evenly w-24 mt-3  font-bold hover:border-red-500  rounded-md">
        <span
          onClick={handleDecrease}
          className="cursor-pointer p-2 bg-slate-100"
        >
          --
        </span>
        <span className="p-2">{quantity}</span>
        <span
          onClick={handleIncrease}
          className="cursor-pointer p-2 bg-slate-100"
        >
          +
        </span>
      </p>

      <div onClick={()=>handelDelete(data?.product)} className=" p-2 mt-3 cursor-pointer text-gray-600">
        <RiDeleteBin5Line size={16} />
      </div>
    </div>
  );
};

export default QuantityController;