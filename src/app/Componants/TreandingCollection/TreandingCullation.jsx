'use client'
import React from 'react'
import HeaderText from "../HeaderText/HeaderText"
import TrandingButton from './TrandingButton'
import dynamic from 'next/dynamic'
// import ModalForCartWatchButton from '../card/ModalForCartWatchButton'

const TrendingCollectionCard = dynamic(() => import('./TrendingCollectionCard'), { ssr: false });
const ModalForCartWatchButton =dynamic(() => import('../card/ModalForCartWatchButton'), {ssr: false});
const TreandingCullation = () => {
  const buttons = [
    { label: "NEW PRODUCTS", bg: "bg-gray-800", textColor: "text-white" },
    { label: "FEATURED PRODUCTS", bg: "bg-red-600", textColor: "text-white" },
    { label: "BEST SELLER", bg: "bg-red-600", textColor: "text-white" },
  ];
  return (
    <div className='' >
      <HeaderText text={'Treanding Collection'} />
      <TrandingButton data={buttons} />
      <TrendingCollectionCard />
      <ModalForCartWatchButton/>
      {/* <TrendingSlider /> */}
    </div>
  )
}

export default TreandingCullation;
