"use client"
import dynamic from 'next/dynamic'



const Cart =dynamic(()=>import('./Cart'),{ssr:false})
const CartMain = () => {
  return (
    <>
    <Cart/>
    </>
  )
}

export default CartMain
