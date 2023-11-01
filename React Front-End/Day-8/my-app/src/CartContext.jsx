import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeItemFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};