'use client'
import React, { useContext } from 'react'
import {my_context} from '../../GlobalDataShere/ContextProvider'
import Collection from '../../Componants/Collection/Collection'
import Breadcrumb from '../../Componants/Breadcrumb/Breadcrumb'
const Page = () => {

const {categories}=useContext(my_context)
  console.log(categories,'this is the category for collection')
  
  return (
  <div className=" mt-10">
        <Breadcrumb text={'Collection'}/>

     <div className='flex flex-wrap min-h-96  justify-evenly mt-20 '>
    {
      categories?.map((data,index)=>(<Collection key={index} data={data} />))
    }
   </div>
  </div>
  )
}

export default Page;
