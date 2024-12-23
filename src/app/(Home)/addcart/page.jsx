"use client"

import dynamic from "next/dynamic";

const AddCartPage = dynamic(
  () => import("../../Componants/Cart/Shared/AddCartfPage/AddCartPage"),
  {
    ssr: false,
  }
);

const AddCart = () => {
  return (
    <div className="min-h-96">
      
      <AddCartPage />
    </div>
  );
};

export default AddCart;
