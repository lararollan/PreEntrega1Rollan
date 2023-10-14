import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: [], total: 0 })

    const addToCart = (product) => {
        setCart((prevCart) => ({
            ...prevCart, items: [...prevCart.items, product],
            total: prevCart.total + product.price * product.quantity
        }))
    }

    

    const removeItem = (productId) => {
        setCart((prevCart) => {
            
            const updatedItems = prevCart.items.filter((item) => item.id !== productId);

            const updatedTotal = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);

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
    )


}
export default CartProvider;