import React, { useContext } from 'react'
import { CartContext } from '../context/cart-context'
import { CartCard } from '../components/CartCard';

export const Cart = () => {
    const { state, dispatch } = useContext(CartContext);
    const { cartItem } = state;
    
  return (
    <div>


        {cartItem.map(item=><CartCard {...item}/>)}
    </div>
  )
}
