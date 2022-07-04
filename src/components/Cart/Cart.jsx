import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { CartContext } from '../CartContext/CartContext';
import CartItem  from '../CartItem/CartItem';
import './CartStyle.css';


function Cart () {

    const {cart, clear} = useContext(CartContext);


    return (
        <>
            {cart && cart.length > 0 && (
                <>
                    <div className="row justify-content-center mt-5">
                        {cart.map((producto) => (
                            <CartItem key={producto.id} {...producto} />
                        ))}
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-8">
                            <button className="btn btn-primary w-100" onClick={clear}>VACIAR CARRITO</button>
                        </div>
                    </div>
                </>
            )}
            {cart.length === 0 && (
                <>
                    <div className="row mt-5 justify-content-center">
                        <img
                            src='https://media1.giphy.com/media/giXLnhxp60zEEIkq8K/giphy.gif?cid=790b7611b9812ae03b72c2b816c22d893c674c21eed5d679&rid=giphy.gif&ct=g'
                            alt='El carrito está vacío...'
                            className="w-25 p-0 mt-5 shadow-lg cart__gif"
                        />
                        <h6 className="text-secondary mt-3 text__center">EL CARRITO ESTÁ VACÍO :(</h6>
                    </div>
                </>
            )}
        </>
    );
};

export default Cart;