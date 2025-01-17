import Link from 'next/link'
import React from 'react'

const Subtotal = ({data,setCart}) => {
  return (
    <div className="  bottom-0 w-full bg-white left-0 px-4  rounded-none shadow-sm max-w-md mx-auto">
                {/* Subtotal Section */}
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="font-semibold text-gray-700">Subtotal</h3>
                  <span className="font-bold text-gray-800">$ {data}</span>
                </div>

                {/* Terms and Conditions */}
                <div className="flex  items-center mt-4">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 text-gray-700 text-sm cursor-pointer"
                  >
                    I have read and agree with the{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                      terms & condition
                    </a>
                    .
                  </label>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                   <Link  onClick={()=>setCart(false)}   href={'/addcart'} className='w-1/2 bg-red-700 text-white py-2  hover:bg-gray-800 duration-300 text-center   font-semibold rounded-none' >
                  {/* <button  onClick={()=>setCart(false)}  className="border border-green-400"> */}
           
                 VIEW CART
                  {/* </button> */}
                   </Link>
                  <button
                    className="w-1/2 bg-gray-300 text-gray-500 py-2 font-semibold rounded-none cursor-not-allowed"
                    disabled
                  >
                    CHECK OUT
                  </button>
                </div>
              </div>
  )
}

export default Subtotal
