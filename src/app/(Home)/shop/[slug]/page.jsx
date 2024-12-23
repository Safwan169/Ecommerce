'use client'

import { useParams } from "next/navigation"

const SearchAllProducts = () => {
    const {slug}=useParams()
    console.log(slug,'search bar text')
  return (
    <div className="min-h-80">
      
    </div>
  )
}

export default SearchAllProducts
