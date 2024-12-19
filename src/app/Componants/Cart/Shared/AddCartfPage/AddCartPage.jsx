'use client'
import FreeShippingBar from "./Shared/FreeShippingBar";
import CardStructure from "./Shared/CardStructure";
import Discount_ReturnBtn from "./Shared/Discount&ReturnBtn";

const AddCartPage = () => {
  return (
    <div className="min-h-24">
      <div className="container mx-auto p-4 md:p-8">
        {/* Free Shipping Bar */}
        <FreeShippingBar />
        {/* Cart Item */}

        <CardStructure />
        {/* Discount Code and Return Button */}
        <Discount_ReturnBtn />
      </div>
    </div>
  );
};

export default AddCartPage;
