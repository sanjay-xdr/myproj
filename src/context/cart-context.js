import { createContext, useReducer, useState, useEffect } from "react";

import { CartReducer } from "../reducer/cart-reducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    cartItem: [],
    wishListItem: [],
  });

  console.log(state.cartItem , "I am cart Item")

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };