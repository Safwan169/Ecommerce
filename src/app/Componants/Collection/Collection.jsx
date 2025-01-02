import Link from 'next/link'
import React from 'react'

const Collection = ({data}) => {

  console.log(data)
  return (
<div className="group">
  <div className="relative flex items-center justify-center opacity-100 w-64 z-10 h-64 bg-gray-100 overflow-hidden">
    {/* Product Image */}
    <img
      src={data?.image} // Replace with your image URL
      alt="Product"
      className="object-contain w-full h-full"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

    {/* Product Info */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2  bg-white text-center px-4 py-1 shadow-md z-20">
      <span className="block text-red-600 font-semibold">{data?.Category}</span>
      <span className="block text-gray-500 text-sm">({data?.Count})</span>
    </div>

    {/* Hover Button */}
    <Link
      href={`/shop/${data?.Category}`}
      className="absolute bottom-[-80px] group-hover:bottom-20 transition-all duration-700 ease-in-out bg-red-700 text-white text-center px-3 py-4 shadow-md z-20"
    >
      SHOP NOW
    </Link>
  </div>
</div>

  )
}

export default Collection
