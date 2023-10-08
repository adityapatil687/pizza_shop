import React, { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = () =>
{
    <CartContext.Provider value={[]}>

    </CartContext.Provider>
} 

export default CartContextProvider;

