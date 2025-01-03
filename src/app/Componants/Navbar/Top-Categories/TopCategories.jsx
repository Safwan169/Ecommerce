"use client"
import React, { useContext, useEffect } from 'react'
import { my_context } from '@/app/GlobalDataShere/ContextProvider'
import { usePathname } from 'next/navigation'

const TopCategories = () => {
  
  const {topCategory,setTopCategory}=useContext(my_context)
  const path=usePathname()

// use for off category when change the route 
  useEffect(()=>{
    setTopCategory(false)
    
  },[path])


  
    return (
       <div onClick={()=>setTopCategory(!topCategory)} className='relative w-full lg:w-fit lg:block  index '>
         <button  className="bg-red-700 py-2 text-white lg:py-3 px-4 font-semibold flex items-center lg:space-x-2 xl:space-x-10 justify-evenly lg:justify-center w-full lg:w-fit">
            <span className='lg:text-[15px]'>TOP CATEGORIES</span>
            <span className="text-[15px]"> ☰</span>

        </button>

 
   
      
       
       </div>
    )
}

export default TopCategories

