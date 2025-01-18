'use client'
import React, { useContext } from 'react'
import {my_context} from '../../GlobalDataShere/ContextProvider'
import Collection from '../../Componants/Collection/Collection'
import Breadcrumb from '../../Componants/Breadcrumb/Breadcrumb'
const Page = () => {

const {categories}=useContext(my_context)
  
  return (
  <div className=" mt-10">
        <div className='ml-5'>
        <Breadcrumb text={'Collection'}/>
        </div>

     <div className='flex flex-wrap min-h-96  justify-evenly mt-20 '>
    {
      categories?.map((data,index)=>(<Collection key={index} data={data} />))
    }
   </div>
  </div>
  )
}

export default Page;
