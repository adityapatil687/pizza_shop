import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    console.log(cartData);
  });
  return (
    <>
      <CartContext.Provider value={{ cartData, setCartData }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
