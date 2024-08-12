import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react';


export const Card = ({title, description, price, image}) => {
  return (
    

    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg">
    <a href="#">
      <img className="rounded-t-lg w-full h-36 object-cover" src={image} alt="Product" />
    </a>
    <div className="p-4">
      <a href="#">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      </a>
      <p className="mb-3 text-gray-700 dark:text-gray-400 text-sm">{description}</p>
      <Link to="#" className="inline-flex items-center px-3 py-2 m-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Check
       
      </Link>
      <Link to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#e2e8f0] rounded-lg  ">
        Add To Cart { ""}
    
      </Link>
    </div>
  </div>

  )
}
