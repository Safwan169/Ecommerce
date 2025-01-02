import Link from 'next/link'
import React from 'react'

const Discount_ReturnBtn = () => {
  return (
    <div className="mt-6 flex flex-col md:flex-row justify-end items-center gap-4">
    
    <Link href={'/shop/Products'} className="bg-red-700 text-white w-full md:w-auto px-6 py-2 text-center hover:bg-red-700">
      RETURN TO STORE
    </Link>
  </div>
  )
}

export default Discount_ReturnBtn
