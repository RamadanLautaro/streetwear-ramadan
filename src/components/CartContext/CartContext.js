import React, { useState, useEffect, createContext } from 'react';


export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity, temporaryStock) => {

        if (isInCart(item.id)) {
            const newCart = cart.map((itemInCart) => {
                if(itemInCart.id === item.id) {
                    itemInCart.quantity = itemInCart.quantity + quantity;
                    itemInCart.subtotalPrice = itemInCart.quantity * itemInCart.price;
                    itemInCart.temporaryStock = temporaryStock;
                }
                return itemInCart;
            })
            setCart([...newCart]);
            return(newCart);
        }
        else {
            const newItem = {...item, quantity, subtotalPrice: item.price * quantity, temporaryStock};
            setCart([...cart, newItem]);
            return([...cart, newItem]);
        }
    }

    const removeItem = (itemId) => {
        const newCart = cart.filter(x => x.id !== itemId);
        setCart(newCart);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        return cart.some(x => x.id === itemId);
        // return cart.filter(itemsInCart => itemsInCart.id === itemId).length > 0;
    }


    return(
    <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider;