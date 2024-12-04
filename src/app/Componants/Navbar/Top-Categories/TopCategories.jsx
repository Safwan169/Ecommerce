"use client"
import React, { useContext } from 'react'
import { my_context } from '../../GlobalDataShere/ContextProvider'

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
       <div onClick={()=>setTopCategory(!topCategory)} className='relative w-fit lg:block hidden index '>
         <button  className="bg-red-600 py-3 px-4 font-semibold flex items-center xl:space-x-20 space-x-24">
            <span>TOP CATEGORIES</span>
            <span className="text-xl">☰</span>

        </button>

 
   
      
       
       </div>
    )
}

export default TopCategories

