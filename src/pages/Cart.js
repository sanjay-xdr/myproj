import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/cart-context'
import { CartCard } from '../components/CartCard';

export const Cart = () => {
    const { state, dispatch } = useContext(CartContext);
    const { cartItem } = state;


    const [totalPrice,setTotalPrice]=useState(0);



    useEffect(() => {
        const total = cartItem.reduce((acc, item) => acc + (item.price * item.quatity), 0);
        setTotalPrice(total);
      }, [cartItem]);
    
    
  return (
    <div>


   
    {cartItem.length!=0 ? 
        <div className="flex h-screen">
      <div className="w-3/4 p-4 flex flex-col items-start ml-8">
      {cartItem.map(item=><CartCard {...item}/>)}
      </div>
      <div className="w-2/4  p-4">
       {cartItem.length>0 ? <>
       
        <h1 className="text-2xl font-bold">Total {totalPrice}</h1>
     

        <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Checkout</button>
       </> : " "}
      </div>
    </div> : <span>Please ADD items into the cart</span>}
    </div>
  )
}
