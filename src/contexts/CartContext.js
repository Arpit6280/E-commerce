import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.product.id === product.id);

    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const totalItems=cartItems.length;

  const removeFromCart = (product) => {
    const updatedItems = cartItems.filter((item) => item.product.id !== product.id);
    setCartItems(updatedItems);
  };

  const adjustQuantity = (product, quantity) => {
    if (quantity === 0) {
      removeFromCart(product);
    } else {
      const updatedItems = cartItems.map((item) =>
        item.product.id === product.id ? { ...item, quantity } : item
      );
      setCartItems(updatedItems);
    }
  };

  // const calculateTotalPrice = (items) => {
  //   return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  // };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, adjustQuantity,totalItems }}>
      {children}
    </CartContext.Provider>
  );
};
