import { Box, Slider } from '@mui/material';
import React from 'react'

const FilterPrice = () => {


  
      const [value, setValue] = React.useState([0, 500]);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      console.log(value,'this is for filter price')
  return (
   <Box sx={{ width: 100 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        max={500}
        // getAriaValueText={valuetext}
      />
    </Box>
  )
}

export default FilterPrice
