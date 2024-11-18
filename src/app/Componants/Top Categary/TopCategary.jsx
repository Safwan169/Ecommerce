import React from 'react'
import {data} from './category'
import Slider from './Slider'

function TopCategary() {
  return (
    <div  className='px-[8%]  my-8 mx-auto'>
     <Slider d={data}/>
    </div>
  )
}

export default TopCategary
