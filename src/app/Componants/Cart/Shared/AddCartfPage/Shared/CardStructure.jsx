import React from "react";
import QuantityController from "../../../QuantityController"
const CardStructure = ({data}) => {
  return (
    <div className="bg-white rounded-lg p-0  lg:p-10 md:p-6 border-b border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Product Image and Details */}
        <div className="flex space-x-4 items-center">
          <img
            src={data?.image}
            alt="Product"
            className="w-20 h-20  border"
          />
          <div className="space-y-2 text-[16px]">

            <p className="font-semibold text-gray-900">{data?.name}</p>
            <p className="text-red-700 font-bold"> $ {data?.price.toFixed(0)}</p>
            <p className="text-sm text-gray-500">Brand: {data?.brand}</p>
          </div>
        </div>

        {/* Quantity Controls */}
        <QuantityController data={data} />

        {/* Total Price */}
        <div className="text-center text-[16px] md:text-right">
          <p className="text-red-700 font-bold">$ {(data?.price*data?.quantity).toFixed(0)}</p>
        </div>
      </div>
    </div>
  );
};

export default CardStructure;
