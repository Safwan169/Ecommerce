import React from 'react'
import Bgslider from './Bgslider'
import {data} from './BgText'

const Background = () => {
  return (
    <div className='my-5'>
      <Bgslider data={data}/>
    </div>
  )
}

export default Background
