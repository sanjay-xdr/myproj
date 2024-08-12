import React from 'react'
import { products } from '../utils/Data' 
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'

export const ProductListing = () => {
  return (
    <div>

     

<div className="flex flex-wrap justify-center gap-4 mt-4">
       {products.map(item=><Card {...item}/>)}
       </div>
    </div>
  )
}
