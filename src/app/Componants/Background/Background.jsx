import React from 'react'
import Bgslider from './Bgslider'
import {data} from './bgText'

const Background = () => {
  return (
    <div className='  text-right w-full h-full  px-0  z-20 right-0 border border-blue-600  my-1  '>

      <Bgslider data={data}/>

    </div>
  )
}

export default Background
