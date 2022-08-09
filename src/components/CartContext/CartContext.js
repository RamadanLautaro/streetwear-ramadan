import React, { useState, useEffect, createContext } from 'react';


export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity, temporaryStock) => {

        if (isInCart(item.id)) {
            const newCart = cart.map((itemInCart) => {
                if(itemInCart.id === item.id) {
                    return {...item, quantity: itemInCart.quantity + quantity, subtotalPrice: item.price * (itemInCart.quantity + quantity), temporaryStock}
                }
                return itemInCart;
            })
            setCart(newCart);
        }
        else {
            const newItem = {...item, quantity, subtotalPrice: item.price * quantity, temporaryStock};
            setCart([...cart, newItem]);
        }
    }

    const removeItem = (itemId) => {
        const newCart = cart.filter(item => item.id !== itemId);
        setCart(newCart);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId);
    }

    const cartTotalQuantity = () => {
        return cart.reduce((prev, curr) => prev + curr.quantity, 0);
    }

    const cartTotalPrice = () => {
        return cart.reduce((prev, curr) => prev + curr.subtotalPrice, 0);
    }


    return(
    <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotalQuantity, cartTotalPrice}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider;