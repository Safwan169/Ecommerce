import React from 'react'

const Page = () => {
  
  return (
    <div className="group relative flex items-center justify-center w-64 h-64 bg-gray-100  overflow-hidden">
    {/* Product Image */}
    <img
      src="/watch.png" // Replace with your image URL
      alt="Product"
      className="object-contain w-full h-full"
    />
  {/* <div className="abs"> */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2  bg-white text-center px-4 py-1 shadow-md ">
        <span className="block text-red-600 font-semibold">Best Seller</span>
        <span className="block text-gray-500 text-sm">(12)</span>

   
        
      </div>
  {/* </div> */}

    {/* Hover Button */}
    <div className="absolute  bottom-[-80px] group-hover:bottom-16 transition-all duration-700 ease-in-out bg-red-700 text-white text-center px-4 py-5  shadow-md">
      SHOP NOW
    </div>
  </div>
  )
}

export default Page;
