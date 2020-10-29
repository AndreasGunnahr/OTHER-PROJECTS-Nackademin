import React, { createContext, useState } from "react";

export const CartContext = createContext({});

const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState({
    totalPrice: 0,
    items: [],
  });
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
