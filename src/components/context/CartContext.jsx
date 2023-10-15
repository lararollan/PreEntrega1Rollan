import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], total: 0 });

  const addToCart = (product) => {
    const existingProductIndex = cart.items.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // El producto ya existe en el carrito, actualiza la cantidad
      const updatedCart = { ...cart };
      updatedCart.items[existingProductIndex].quantity += product.quantity;
      updatedCart.total += product.price * product.quantity;
      setCart(updatedCart);
    } else {
      // El producto no existe en el carrito, agrégalo
      setCart((prevCart) => ({
        ...prevCart,
        items: [...prevCart.items, product],
        total: prevCart.total + product.price * product.quantity,
      }));
    }
  };

  const removeItem = (productId) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.filter((item) => item.id !== productId);
      const updatedTotal = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        ...prevCart,
        items: updatedItems,
        total: updatedTotal
      };
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
