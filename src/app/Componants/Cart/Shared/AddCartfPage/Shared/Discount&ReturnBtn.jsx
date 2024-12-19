import Link from 'next/link'
import React from 'react'

const Discount_ReturnBtn = () => {
  return (
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
    <Link href={'/allProducts'} className="bg-red-700 text-white w-full md:w-auto px-6 py-2 text-center hover:bg-red-700">
      RETURN TO STORE
    </Link>
  </div>
  )
}

export default Discount_ReturnBtn
