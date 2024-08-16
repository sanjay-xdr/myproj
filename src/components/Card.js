import React  , {useContext }from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../context/cart-context';
import { successNotify } from '../utils/toastify';





export const Card = ({title, description, price, image,id}) => {

    const { state, dispatch } = useContext(CartContext);
    const { cartItem } = state;

  
    const cartHandler=(title, description, price, image,id)=>{
        console.log("Adding to Cart" , id)
        dispatch({
            type: "ADD_TO_CART",
            payload: { title, _id:id, image, description, price },
          })
          successNotify("Successfully Added to Cart");

        //create an array which stores cart item  in the context
        // adding into cart get the item fetch the 
    }
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

      <p className="mb-3 text-gray-700 dark:text-gray-400 text-sm font-bold">Price Rs. {price}</p>
      
      <button to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#3730a3] rounded-lg hover:shadow-lg	  " >
      {cartItem.some((item) => item._id === id) ? (
            <Link
              to="/cart"
             
            >
              {" "}
              Go to cart{" "}
            </Link>
          ) : <p onClick={()=>cartHandler(title, description, price, image,id)}>Add to Cart</p>
        }
      </button>
    </div>

  </div>

  )
}
