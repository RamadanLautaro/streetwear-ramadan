import React, { useState, useEffect, useContext, createContext } from 'react';


export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
    const [cartTotalPrice, setCartTotalPrice] = useState(0); 

    useEffect(() => {

        if (cart.length > 0) {

            var totalQuantity = 0;
            var totalPrice = 0;

            for (let i = 0; i < cart.length; i++) {
                totalQuantity += (cart[i].quantity);
                totalPrice += (cart[i].subtotalPrice);
            }

            setCartTotalQuantity(totalQuantity);
            setCartTotalPrice(totalPrice);
        }
        else {
            setCartTotalQuantity(0);
            setCartTotalPrice(0);
        }

    }, [cart])

    const addItem = (item, quantity) => {

        if (isInCart(item.id)) {
            const itemInCart = cart.find(itemsInCart => itemsInCart.id === item.id)
            itemInCart.quantity = itemInCart.quantity + quantity;
            itemInCart.subtotalPrice = itemInCart.quantity * itemInCart.price;
            setCart([...cart]);
        }
        else {
            const newItem = {...item, quantity, subtotalPrice: item.price * quantity};
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
    <CartContext.Provider value={{cart, cartTotalQuantity, cartTotalPrice, addItem, removeItem, clear}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider;