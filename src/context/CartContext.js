import React, { createContext, useState, useEffect } from 'react';

// Context'i oluştur ve dışa aktar
export const CartContext = createContext();

// CartProvider bileşenini oluştur ve dışa aktar
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    // Sepet sayısını güncelle
    const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(newCartCount);

    // Sepet toplamını güncelle
    const newCartTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity, 
      0
    );
    setCartTotal(newCartTotal);

    // Sepeti localStorage'a kaydet
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Sayfa yüklendiğinde localStorage'dan sepeti al
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Sepete ürün ekle
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      // Ürün zaten sepette var mı kontrol et
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      
      if (existingItemIndex > -1) {
        // Ürün zaten sepette, miktarını güncelle
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        // Ürün sepette yok, yeni ekle
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  // Sepetten ürün çıkar
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Ürün miktarını güncelle
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Sepeti temizle
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};
