import Link from 'next/link'
import React from 'react'

const EmptyCardText = ({cartName}) => {
  return (
    <div className=" min-h-60 text-xl  items-center flex-col sm:flex-row flex justify-center gap-1">
          <span>Your {cartName} is empty</span>{" "}
          <Link
            href={"/shop/Products"}
            className="border-b hover:text-red-700 hover:border-red-700 duration-300 border-black "
          >
            return to store
          </Link>
        </div>
  )
}

export default EmptyCardText
