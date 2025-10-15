import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems(currentItems => {
      // Check if item already exists in cart
      const existingItem = currentItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // If exists, increase quantity
        return currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      // If doesn't exist, add new item with quantity 1
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === productId);
      
      if (existingItem?.quantity === 1) {
        // If last item, remove from cart
        return currentItems.filter(item => item.id !== productId);
      }

      // Decrease quantity
      return currentItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Get cart total
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Get total number of items in cart
  const getCartItemsCount = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartItemsCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}