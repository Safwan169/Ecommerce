import React from 'react'

export default function HeaderText() {
  return (
    <div className="flex items-center justify-center my-8">
    <div className="flex items-center space-x-2">
      {/* Left Line */}
      <div className="h-[2.4px] bg-red-600  w-8"></div>
      {/* Text */}
      <h2 className="text-lg font-semibold text-gray-800 sm:text-xl lg:text-2xl">
        Trending collection
      </h2>
      {/* Right Line */}
      <div className="h-[2.4px] bg-red-600  w-8 "></div>
    </div>
  </div>
  )
}
