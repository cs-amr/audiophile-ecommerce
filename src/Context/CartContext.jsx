import { createContext, useContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

const CartContext = createContext();
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const Context = useContext(CartContext);
  return Context;
}
