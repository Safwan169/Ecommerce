import React from "react";
import QuantityController from "../../../QuantityController";

const CardStructure = ({ data }) => {
  return (
    <div className="bg-white rounded-lg p-4 lg:p-8 border-b border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
        {/* Product Image and Details */}
        <div className="flex items-center space-x-4 col-span-2">
          <img
            src={data?.image}
            alt="Product"
            className="w-20 h-20 object-cover rounded border"
          />
          <div className="space-y-1">
            <p className="font-semibold text-gray-900 text-base md:text-lg">
              {data?.name}
            </p>
            <p className="text-red-700 font-bold text-sm md:text-base">
              ${data?.price.toFixed(0)}
            </p>
            <p className="text-sm text-gray-500">Brand: {data?.brand}</p>
          </div>
        </div>

        {/* Quantity Controls and Total Price */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
          <div className="w-full mx-auto  flex justify-end md:w-auto">
            {/* Quantity Controls */}
            <QuantityController data={data} />
          </div>

          <div className="mt-2 text-center w-full md:text-right">
            <p className="text-red-700 font-bold text-base md:text-lg">
              ${data?.quantity ? (data?.price * data?.quantity).toFixed(0) : data?.price.toFixed(0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStructure;
