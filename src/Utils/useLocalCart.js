import { useState, useEffect } from "react";
import { decrementFromCart, deleteFromCart, getCartProducts, incrementFromCart, saveToCart } from "./LocalStroage";


const useLocalCart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  // Load once on mount
  useEffect(() => {
    setCartProducts(getCartProducts());
  }, []);

  // Add to cart
  const handleAdd = (product) => {
    saveToCart(product);
    setCartProducts(getCartProducts()); // re-sync after update
  };

  // Delete
  const handleDeleteFromLs = (product) => {
    deleteFromCart(product);
    setCartProducts(getCartProducts()); // re-sync after update
  };

  // Increment
  const handleIncreaseLs = (id) => {
    const updated = incrementFromCart(id);
    setCartProducts(updated);
  };

  // Decrement
  const handleDecreaseLs = (id) => {
    const updated = decrementFromCart(id);
    setCartProducts(updated);
  };

  return {
    cartProducts,
    handleAdd,
    handleDeleteFromLs,
    handleIncreaseLs,
    handleDecreaseLs
  };
};

export default useLocalCart;
