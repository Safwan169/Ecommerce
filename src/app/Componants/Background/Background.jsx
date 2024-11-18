import React from 'react'
import Bgslider from './Bgslider'
import {data} from './bgText'

const Background = () => {
  return (
    <div className='my-1  '>
      <Bgslider data={data}/>
    </div>
  )
}

export default Background
