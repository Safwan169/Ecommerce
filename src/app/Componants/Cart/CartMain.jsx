"use client"
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'



const Cart =dynamic(()=>import('./Cart'),{ssr:false})
const CartMain = () => {

  const location= usePathname()
  console.log(location,'this is the location')
  return (
    <div >

      {location=='/addcart'?' ':<Cart/>}
    </ div>
  )
}

export default CartMain
