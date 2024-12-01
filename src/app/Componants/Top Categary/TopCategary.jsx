import React from 'react'
import {data} from './category'
import Slider from './Slider'
import HeaderText from '../HeaderText/HeaderText'

function TopCategary() {
  return (
    <div  className=' space-y-10  mx-auto'>
      <HeaderText text={'Top category'}/>
     <Slider d={data}/>
    </div>
  )
}

export default TopCategary
