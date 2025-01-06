import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

const Brand = ({data,setBrandCheck}) => {

  const handleBrandCheck = (event) => {
    console.log(event);
    setBrandCheck()
    // setBrandCheck( event.arget.checkbox.valutarget.value);
  }
  return (
   <FormGroup className='space-y-2'>
      <FormControlLabel control={<Checkbox  />} name='checkbox' onClick={()=>handleBrandCheck(data)} value={`${data}`} label={`${data}`} />
    
    </FormGroup>
  )
}

export default Brand
