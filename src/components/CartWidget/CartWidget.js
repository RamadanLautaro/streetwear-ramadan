import React, {useState, useContext} from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { CartContext } from '../CartContext/CartContext';
import './CartWidgetStyle.css';

export const CartWidget = ({ width }) => {

    const {cartTotalQuantity} = useContext(CartContext);


    return (
        cartTotalQuantity > 0 
        ?
        <Link className="nav-link" to="/cart">
            <div className="cart__widget">
                <img src="/img/cart-icon.png" width={width}/>
                <span className="cart__number">{cartTotalQuantity}</span>
            </div>
        </Link>
        :
        <div>
            
        </div>
    );
};