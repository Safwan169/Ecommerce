import Image from 'next/image'
import React from 'react'

const LogoName = () => {
  return (
    <div className=" flex items-center space-x-3 sm:space-x-2">
    {/* <div className="text-red-600 font-bold text-2xl">E</div> */}
    <Image
      width={500}
      height={500}
      className="w-10 sm:w-[50px]"
      src="/webLogo.png"
      alt=""
    />
    <div className="font-bold text-xl">Electron</div>
  </div>
  )
}

export default LogoName
