import React from 'react'

const AddCartPage = () => {
  return (
    <div>
       <div className="container mx-auto p-4 md:p-8">
          {/* Free Shipping Bar */}
          <div className="text-center mb-6">
            <p className="text-gray-700 font-semibold text-sm md:text-lg">
              CONGRATULATIONS, YOU'VE GOT FREE SHIPPING!
            </p>
            <div className="relative w-full md:w-3/5 mx-auto mt-2">
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-red-700 rounded-full" style={{ width: "10%" }}></div>
              </div>
              <div className="absolute left-[9%] top-1/2 -translate-y-1/2 bg-red-700 p-1 rounded-full text-white">
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
    
          {/* Cart Item */}
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              {/* Product Image and Details */}
              <div className="flex space-x-4 items-center">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Product"
                  className="w-20 h-20 rounded border"
                />
                <div>
                  <p className="font-semibold text-gray-900">Mouse</p>
                  <p className="text-red-700 font-bold">Rs. 25.00</p>
                  <p className="text-sm text-gray-500">Color: whitesmoke</p>
                </div>
              </div>
    
              {/* Quantity Controls */}
              {/* <QuantityController data={data} /> */}

    
              {/* Total Price */}
              <div className="text-center md:text-right">
                <p className="text-red-700 font-bold">Rs. 225.00</p>
              </div>
            </div>
          </div>
    
          {/* Discount Code and Return Button */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center w-full md:w-1/2">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Discount code"
                  className="w-full p-2 border border-gray-300 rounded-l focus:outline-none"
                />
                <button className="absolute top-0 right-0 h-full px-4 bg-red-700 text-white hover:bg-red-700 rounded-r">
                  &rarr;
                </button>
              </div>
            </div>
            <button className="bg-red-700 text-white w-full md:w-auto px-6 py-2 rounded hover:bg-red-700">
              RETURN TO STORE
            </button>
          </div>
        </div>
    </div>
  )
}

export default AddCartPage
