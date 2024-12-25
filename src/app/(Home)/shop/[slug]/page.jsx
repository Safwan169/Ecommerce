'use client'

import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect } from "react"

const SearchAllProducts = () => {
    const {slug}=useParams()
    console.log(slug,'search bar text')

    useEffect(()=>{

      const data= axios.get(`http://localhost:5000/search?value=${slug}`)

    },[slug])


  return (
    <div className="min-h-80">
      
    </div>
  )
}

export default SearchAllProducts
