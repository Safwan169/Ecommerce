"use client";
import FreeShippingBar from "./Shared/FreeShippingBar";
import CardStructure from "./Shared/CardStructure";
import Discount_ReturnBtn from "./Shared/Discount&ReturnBtn";
import { useContext } from "react";
import { my_context } from "../../../../GlobalDataShere/ContextProvider";
import EmptyCardText from "../EmptyCardText/EmptyCardText";
import Breadcrumb from "../../../Breadcrumb/Breadcrumb";
import Link from "next/link";
const AddCartPage = () => {
  const { cart } = useContext(my_context);
  // console.log("AddCartPage", cart);

  const amount = cart?.cartItems?.reduce(
    (acc, current) => acc + (current?.price).toFixed(0) * current?.quantity,
    0
  );

  const tax = amount * (10 / 100).toFixed(2);

  const totalAmount = amount + tax + (amount > 1000 ? 0 : 15);

  // console.log(amount,"this is the amount for the your cart section ")

  return (
    <div className="min-h-24 mt-8 flex flex-col xl:gap-5  lg:flex-row px-2 lg:px-0 w-full  xl:px-5 ">
      <div className="container space-y-10 mx-auto p-4 md:p-8">
        {/* BreadCrumb */}
        <Breadcrumb text={"Your Shopping Cart"} />

        <div className={`${cart?.cartItems < 1 ? "hidden" : "block"}`}>
          {/* Free Shipping Bar */}
          <FreeShippingBar amount={amount / 10} />
        </div>
        {/* Cart Item */}

        <div>
          {cart?.cartItems?.length < 1 ? (
            <EmptyCardText cartName={"Cart"} />
          ) : (
            cart?.cartItems?.map((data, index) => (
              <CardStructure key={index} data={data} />
            ))
          )}
        </div>
        <div className={`${cart?.cartItems < 1 ? "hidden" : "block"}`}>
          {/* Discount Code and Return Button */}
          <Discount_ReturnBtn />
        </div>
      </div>
      <div className="bg-white  rounded-lg  w-fit   max-w-sm mx-auto ">
        <div className=" sticky space-y-3 p-2 md:p-5 xl:p-5 border border-gray-300 w-fit top-32">
          <h2 className="text-xl font-semibold  text-gray-800 mb-4">
            Order Summary
          </h2>
          <div className="flex justify-between  text-gray-700 mb-2">
            <span>Subtotal:</span>
            <span>${amount}.00</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Shipping:</span>
            <span>{amount > 1000 ? "FREE" : "$15"}</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Tax:</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-900 font-semibold text-lg mb-4">
            <span>Total:</span>
            <span className="text-red-700">${totalAmount}</span>
          </div>
          <button className="bg-red-700 hover:bg-red-800 text-white font-medium  uppercase py-2 px-4  w-full">
            <Link href={"/checkout"}> Proceed to Checkout</Link>
          </button>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Secure Payment via bkash, Nagod, or Rocket.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddCartPage;
