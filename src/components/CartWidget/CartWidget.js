import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../CartContext/CartContext';
import './CartWidgetStyle.css';

export const CartWidget = ({ width }) => {

    const {cart} = useContext(CartContext);


    return (
        //ya no hace falta obtener el CartTotalQuantity innecesariamente desde el context
        //solo con validar el length del carrito es suficiente para mostrar o no el widget
        cart.length > 0 
        ?
        <Link className="nav-link p-0 px-5 mb-3 mb-md-0" to="/cart">
            <div className="cart__widget">
                <img src="/img/cart-icon.png" alt="CARRITO" width={width}/>
                <span className="cart__number">{cart.length}</span>
            </div>
        </Link>
        :
        <div>
            
        </div>
    );
};