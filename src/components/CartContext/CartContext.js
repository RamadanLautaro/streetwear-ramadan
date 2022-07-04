import React, { useState, useEffect, useContext, createContext } from 'react';


export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {

        if (isInCart(item.id)) {
            const itemInCart = cart.find(itemsInCart => itemsInCart.id === item.id)
            itemInCart.quantity = itemInCart.quantity + quantity;
        }
        else {
            const newItem = {...item, quantity : quantity};
            setCart([...cart, newItem]);
        }
    }

    const removeItem = (itemId) => {
        const indexToDelete = cart.indexOf(cart.find(itemsInCart => itemsInCart.id === itemId));
        const itemDeleted = cart.splice(indexToDelete, 1)
        const itemsPreserved = cart.filter(itemsInCart => !itemDeleted.includes(itemsInCart));
        setCart(itemsPreserved);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        return cart.find(itemsInCart => itemsInCart.id === itemId) ? true : false;
    }


    return(
    <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider;