import { Box, Slider } from '@mui/material';
import React from 'react'

const FilterPrice = ({maxPrice,setPriceRange}) => {


  
      const [value, setValue] = React.useState([0, maxPrice]);

      const handleChange = (event, newValue) => {
        setValue(newValue);
        setPriceRange(newValue); // Call the context function to update price range in parent component.  // update local state for text
      };

      console.log(value,'this is for filter price')
  return (
<>

<Box sx={{ width: 150 }}>
<h1 className='text-xl mb-3'>Price</h1>
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
