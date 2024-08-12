import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../context/cart-context';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { state, dispatch } = useContext(CartContext);

  const { cartItem } = state;
  

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#991b1b] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold">Brand</a>
        <button
          onClick={toggleMenu}
          className="text-white block lg:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <div className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          <Link to={"/product"} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg">Home</Link>
          

          
          <Link to={"/cart"} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
          <ShoppingCart />

          <p>{cartItem.length}</p>
          Cart</Link>
    
        </div>
      </div>
    </nav>
  );
};


