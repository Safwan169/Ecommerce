import React from "react";

const CardStructure = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Product Image and Details */}
        <div className="flex space-x-4 items-center">
          <img
            src="https://via.placeholder.com/80"
            alt="Product"
            className="w-20 h-20  border"
          />
          <div className="space-y-2 text-[16px]">
            <p className="font-semibold text-gray-900">Mouse</p>
            <p className="text-red-700 font-bold">Rs. 25.00</p>
            <p className="text-sm text-gray-500">Color: whitesmoke</p>
          </div>
        </div>

        {/* Quantity Controls */}
        {/* <QuantityController data={data} /> */}
        <p>+ 1 -</p>

        {/* Total Price */}
        <div className="text-center md:text-right">
          <p className="text-red-700 font-bold">Rs. 225.00</p>
        </div>
      </div>
    </div>
  );
};

export default CardStructure;
