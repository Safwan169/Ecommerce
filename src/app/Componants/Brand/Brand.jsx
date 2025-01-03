import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'

const Brand = ({data}) => {
  return (
   <FormGroup className='space-y-2'>
   <h1 className='  text-xl'>Brands</h1>
      <FormControlLabel control={<Checkbox  />} label={`${data}`} />
    
    </FormGroup>
  )
}

export default Brand
