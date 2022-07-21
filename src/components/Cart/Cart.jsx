import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { CartContext } from '../CartContext/CartContext';
import CartItem  from '../CartItem/CartItem';
import {OrderComponent} from '../Order/OrderComponent';
import './CartStyle.css';


function Cart () {

    const {cart, cartTotalQuantity, cartTotalPrice, clear} = useContext(CartContext);


    return (
        <>
            {cart && cart.length > 0 && (
                <>
                    <div className="row m-0 mt-5 justify-content-center">
                        {cart.map((producto) => (
                            <CartItem key={producto.id} {...producto} />
                        ))}
                    </div>
                    <div className="row m-0 mt-5 justify-content-center">
                        <div className="col-8 bg-dark card shadow">
                            <div className="row p-3 justify-content-center">
                                <div className="col-6 cart__details">
                                    <span className="cart__totalQuantity">{cartTotalQuantity} UNIDADES</span>
                                </div>
                                <div className="col-6 cart__details">
                                    <span className="cart__totalPrice">TOTAL: ${cartTotalPrice} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 mt-3 mb-5 justify-content-center">
                        <div className="col-8">
                            <div className="row">
                                <div className="col-4">
                                    <button className="btn btn-danger w-100" onClick={clear}>VACIAR CARRITO</button>
                                </div>
                                <div className="col-4">
                                    <Link to="/" className="btn btn-secondary w-100">SEGUIR COMPRANDO</Link>
                                </div>
                                <div className="col-4">
                                    <Link to="/order" className="btn btn-primary w-100">FINALIZAR COMPRA</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {cart.length === 0 && (
                <>
                    <div className="row m-0 mt-3 justify-content-center">
                        <img
                            src='https://media1.giphy.com/media/giXLnhxp60zEEIkq8K/giphy.gif?cid=790b7611b9812ae03b72c2b816c22d893c674c21eed5d679&rid=giphy.gif&ct=g'
                            alt='El carrito está vacío...'
                            className="w-25 p-0 mt-5 shadow-lg cart__gif"
                        />
                        <h6 className="text-secondary mt-3 text__center">EL CARRITO ESTÁ VACÍO :(</h6>
                    </div>
                    <div className="row m-0 mt-5 justify-content-center">
                        <div className="col-3">
                            <Link to="/" className="btn btn-primary w-100">VOLVER</Link>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Cart;