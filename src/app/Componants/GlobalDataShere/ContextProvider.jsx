'use client'
import React, { createContext, useState } from 'react'




 export const my_context=createContext()
const ContextProvider = ({children}) => {

  const [trendingProduct,setTrendingProduct]=useState(0)
  // for togole top category
   const [topCategory, setTopCategory] = useState(false)
   const [openCart,setCart]=useState(false)

const data={
  trendingProduct,
  setTrendingProduct,
  topCategory,
  setTopCategory,
  openCart,
  setCart
}
// console.log(trendingProduct)
  return (
    <my_context.Provider value={data} >
      {children}
    </my_context.Provider>
  )
}

export default ContextProvider
