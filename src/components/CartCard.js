import React, { useContext } from 'react'
import { CartContext } from '../context/cart-context';

export const CartCard = ({title, description, price, image,_id,quatity}) => {

    const { state, dispatch } = useContext(CartContext);

   


    const incrementCartItem=(_id)=>{
        console.log(_id)
        dispatch({
            type: "INCREMENT",
            payload: {  _id },
          })
    }

    const decrementCartItem=(_id)=>{
        console.log(_id)
        dispatch({
            type: "DECREMENT",
            payload: {  _id },
          })
    }

    const removeCartProduct=(id)=>{
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {  _id },
          })


    }
  return (
    <div>

        
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl ">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <p>Price: {quatity * price}</p>
    
      <div className='m-4'>
      <button className='border border-grey-100 h-6 w-6 text-center' onClick={()=>decrementCartItem(_id)}>- </button>  <span>{quatity}</span> <button className='border border-grey-100 h-6 w-6 text-center' onClick={()=>incrementCartItem(_id)}>+</button>
      </div>
      <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick={()=>removeCartProduct(_id)}>Remove Item</button>
    </div>
</a>

    </div>
  )
}
