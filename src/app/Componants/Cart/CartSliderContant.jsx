import React from 'react'

const CartSliderContant = ({data}) => {
  return (
    <div className='flex items-center mx-auto p-1 md:p-3  lg:p-3'>
      <div className='w-16 h-16'>
        <img className='bg-cover ' src={data?.image} loading='lazy' alt="" />
      </div>
      <dir className=''>
        <p className=' text-gray-700' >{data?.name}</p>
        <p className=' text-red-700 font-bold'>Price:{data?.price}</p>
        <p className=''><span className='font-bold '>Brand:</span>{data?.brand}</p>
      </dir>
    </div>
  )
}

export default CartSliderContant
