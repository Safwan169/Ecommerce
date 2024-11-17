import React from 'react'
import HeaderText from "../HeaderText/HeaderText"
import TrandingButton from './trandingButton'
import AOS from 'aos';
const TreandingCullation = () => {
  
  const buttons = [
    { label: "NEW PRODUCTS", bg: "bg-gray-800", textColor: "text-white" },
    { label: "FEATURED PRODUCTS", bg: "bg-red-600", textColor: "text-white" },
    { label: "BEST SELLER", bg: "bg-red-600", textColor: "text-white" },
  ];
  return (
    <div className='' >
      <HeaderText  text={'Treanding Collection'} />
      <TrandingButton  data={buttons}/>
    </div>
  )
}

export default TreandingCullation
