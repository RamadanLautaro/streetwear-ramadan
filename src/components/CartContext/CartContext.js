import React, { useState, useEffect, createContext } from 'react';


export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    //ya no hace falta utilizar los estados CartTotalPrice y CartTotalQuantity
    //ya no hace falta utilizar un useEfect innecesariamente

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity, temporaryStock) => {

        if (isInCart(item.id)) {
            //cambié el FIND por FILTER para respetar la inmutabilidad
            //ahora tengo que especificar el indice 0 ya que find devolvia un objeto pero filter un array
            //siempre va a ser indice 0 porque nunca van a haber dos items iguales en el carrito
            //es decir que el filter siempre va a devolver un array de un único objeto
            const itemsInCart = cart.filter(itemsInCart => itemsInCart.id === item.id)
            const itemInCart = itemsInCart[0]

            itemInCart.quantity = itemInCart.quantity + quantity;
            itemInCart.subtotalPrice = itemInCart.quantity * itemInCart.price;
            itemInCart.temporaryStock = temporaryStock;
            setCart([...cart]);
            return(itemInCart);
        }
        else {
            const newItem = {...item, quantity, subtotalPrice: item.price * quantity, temporaryStock};
            setCart([...cart, newItem]);
            return(newItem);
        }
    }

    const removeItem = (itemId) => {
        //cambié el FIND y SPLICE por FILTER para respetar la inmutabilidad
        //primero obtengo un array con el item a eliminar
        //luego solo filtro el resto del carrito excluyendo el item a eliminar
        const indemToDelete = cart.filter(itemsInCart => itemsInCart.id === itemId);
        const itemsPreserved = cart.filter(itemsInCart => !indemToDelete.includes(itemsInCart));
        setCart(itemsPreserved);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        //cambié el FIND por FILTER para respetar la inmutabilidad
        //ahora solo valido en base a la longitud del array devuelto
        //es decir que si es mayor a 0 el item ya está en el carrito
        return cart.filter(itemsInCart => itemsInCart.id === itemId).length > 0 ? true : false;
    }


    return(
    <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider;