'use client'
import React, { createContext, useState } from 'react'




 export const my_context=createContext()
const ContextProvider = ({children}) => {

  const [trendingProduct,setTrendingProduct]=useState(0)
const data={
  trendingProduct,
  setTrendingProduct
}
// console.log(trendingProduct)
  return (
    <my_context.Provider value={data} >
      {children}
    </my_context.Provider>
  )
}

export default ContextProvider
