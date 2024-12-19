"use client";
import FreeShippingBar from "./Shared/FreeShippingBar";
import CardStructure from "./Shared/CardStructure";
import Discount_ReturnBtn from "./Shared/Discount&ReturnBtn";
import { useContext } from "react";
import { my_context } from "../../../../GlobalDataShere/ContextProvider";
import EmptyCardText from "../EmptyCardText/EmptyCardText";
import Breadcrumb from "../../../Breadcrumb/Breadcrumb";
const AddCartPage = () => {
  const { cart } = useContext(my_context);
  // console.log("AddCartPage", cart);

  const amount =cart?.cartItems?.reduce((acc,current)=> acc + ((current?.price).toFixed(0)*(current?.quantity)) ,0)/10

  // console.log(amount,"this is the amount for the your cart section ")

  return (
    <div className="min-h-24 mt-8 ">
      <div className="container space-y-10 mx-auto p-4 md:p-8">
        {/* BreadCrumb */}
        <Breadcrumb text={"Your Shopping Cart"} />

       <div className={`${cart?.cartItems<1 ?'hidden':'block'}`}>

         {/* Free Shipping Bar */}
         <FreeShippingBar amount={amount} />
       </div>
        {/* Cart Item */}

        <div>
          {cart?.cartItems?.length < 1 ? (
            <EmptyCardText cartName={"Cart"} />
          ) : (
            cart?.cartItems?.map((data,index) => <CardStructure key={index} data={data} />)
          )}
        </div>
        <div className={`${cart?.cartItems < 1 ? "hidden" : "block"}`}>
          {/* Discount Code and Return Button */}
          <Discount_ReturnBtn />
        </div>
      </div>
    </div>
  );
};

export default AddCartPage;
