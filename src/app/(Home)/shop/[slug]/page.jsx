'use client'

import { useParams } from "next/navigation"

const SearchAllProducts = () => {
    const {slug}=useParams()
    console.log(slug,'search bar text')
  return (
    <div>
      
    </div>
  )
}

export default SearchAllProducts
