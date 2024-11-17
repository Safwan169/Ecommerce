import React from 'react'
import {data} from './Category'
import Slider from './Slider'

function TopCategary() {
  return (
    <div  className='max-w-6xl my-8 mx-auto'>
     <Slider d={data}/>
    </div>
  )
}

export default TopCategary
