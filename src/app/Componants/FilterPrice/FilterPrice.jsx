import { Box, Slider } from '@mui/material';
import React from 'react'

const FilterPrice = ({maxPrice,setPriceRange}) => {


let set
      const [value, setValue] = React.useState([0, set || maxPrice]);

      const handleChange = (event, newValue) => {
        setValue(newValue);
        set=[newValue]

        setTimeout(() => {
          setPriceRange(newValue); 

        },3000)
      };
      console.log(set)

      console.log(value,'this is for filter price')
  return (
<>

<Box sx={{ width: 150 }}>
<h1 className='text-xl mb-3'>Price</h1>
<p>
The highest price is ${maxPrice}
</p>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        max={maxPrice}
        // getAriaValueText={valuetext}
      />
    </Box>
</>
  )
}

export default FilterPrice
