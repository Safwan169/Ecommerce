import React from "react";

const FreeShippingBar = ({ amount }) => {

  console.log(amount)
  return (
    <div className="text-center mb-6">
      {amount > 99 ? <p className="text-gray-700 font-semibold text-sm md:text-[16px] leading-7">
        CONGRATULATIONS, YOU&#39;VE GOT FREE SHIPPING!
      </p> : <p className="text-gray-700 font-semibold text-sm md:text-lg">
        Spend $ {1000 - amount * 10} more and get free shipping!

      </p>}

      <div className="relative w-full md:w-3/5 mx-auto mt-2">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-red-700 rounded-full"
            style={{ width: `${amount > 100 ? "100%" : `${amount}%`}` }}
          ></div>
        </div>
        <div
          className="absolute top-1/2 -translate-y-1/2 bg-red-700 p-1 rounded-full text-white"
          style={{
            left: amount < 99 ? `${amount-1}%` : "98%",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.3 2M7 13h10l4-8H6.3M7 13l-1.4 4.4a2 2 0 001.9 2.6h9.1a2 2 0 001.9-2.6L17 13M7 13h10m-5 8a1 1 0 100-2 1 1 0 000 2m6 0a1 1 0 100-2 1 1 0 000 2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FreeShippingBar;
