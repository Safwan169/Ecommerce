"use client"
import React, { useContext } from 'react'
import { my_context } from '@/app/GlobalDataShere/ContextProvider'

const TopCategories = () => {
  

  // useEffect(()=>{
  //   const handleScroll=()=>{
  //     const data=window.pageYOffset
  //     if(data>=200){
  //       setTogle(false)
  //     }else{
  //       setTogle(true)
  //     }
  //   }
  //   window.addEventListener('scroll',handleScroll)
  //   return ()=>{
  //     window.removeEventListener('scroll',handleScroll)
  //   }
  // })

  const {topCategory,setTopCategory}=useContext(my_context)

  
    return (
       <div onClick={()=>setTopCategory(!topCategory)} className='relative w-full lg:w-fit lg:block  index '>
         <button  className="bg-red-700 py-2 text-white lg:py-3 px-4 font-semibold flex items-center xl:space-x-10 justify-evenly lg:justify-center w-full lg:w-fit">
            <span>TOP CATEGORIES</span>
            <span className="text-xl">☰</span>

        </button>

 
   
      
       
       </div>
    )
}

export default TopCategories

