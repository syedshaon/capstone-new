import { createContext, useState } from "react";

const addCartItems = (cartItems, productToAdd) => {
  // Find if cart already contains the product
  // Came here
  // console.log("came here");
  const existingCartItem = cartItems.find((cartItem) => cartItem.id == productToAdd.id);
  // If yes
  if (existingCartItem) {
    return cartItems.map((cartItem) => (cartItem.id == productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
  }
  //  If No
  // Return
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemsToCart = (productToAdd) => {
    setCartItems(addCartItems(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, setCartItems, addItemsToCart, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
