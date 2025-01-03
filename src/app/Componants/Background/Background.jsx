import React from 'react'
import Bgslider from './Bgslider'
import {data} from './bgText'

const Background = () => {
  return (
    <div className='  text-right w-full h-full bg-[#e7e9eb]  px-0 mx-0 z-0  right-0 border border-gray-400  my-1  '>

      <Bgslider data={data}/>

    </div>
  )
}

export default Background
