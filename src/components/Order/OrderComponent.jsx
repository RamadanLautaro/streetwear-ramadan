import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import {addDoc, collection, getDocs, getDoc, getFirestore, query, where} from "firebase/firestore";
import { CartContext } from '../CartContext/CartContext';


export const OrderComponent = () => {

    const {cart, cartTotalQuantity, cartTotalPrice} = useContext(CartContext);

    const [buyerName, setBuyerName] = useState('');
    const [buyerPhone, setBuyerPhone] = useState('');
    const [buyerEmail, setBuyerEmail] = useState('');
    const [buyerNameError, setBuyerNameError] = useState(true);
    const [buyerPhoneError, setBuyerPhoneError] = useState(true);
    const [buyerEmailError, setBuyerEmailError] = useState(true);
    const [orderId, setOrderId] = useState();


    const buyerNameChange = (name) => {
        if (name.length >= 5)
            setBuyerNameError(false);
        else
            setBuyerNameError(true);

        setBuyerName(name);
    }

    const buyerPhoneChange = (phone) => {
        if (phone.length >= 10) 
            setBuyerPhoneError(false);
        else
            setBuyerPhoneError(true);

        setBuyerPhone(phone);
    }

    const buyerEmailChange = (email) => {
        let format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (format.test(email)) 
            setBuyerEmailError(false);
        else
            setBuyerEmailError(true);

        setBuyerEmail(email);
    }

    const sendOrder = () => {
        const order = {
            buyer: {nombre: buyerName, telefono: buyerPhone, email: buyerEmail},
            items: {cart},
            total: cartTotalPrice
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({id}) => setOrderId(id));
    }

    return (
        <>
            {cart.length > 0 && (
                <div className='row m-0 mt-5 justify-content-center'>
                    <h1 className='text-primary text-center mb-3'>FINALIZAR COMPRA</h1>
                    <div className='col-5 m-3 card shadow-lg'>
                        <div className='row card-body m-3'>
                            <div className='col-12 card shadow'>
                                <h1 className='m-0 mx-2 mt-2 text-primary fs-2 fw-light'>UNIDADES TOTALES</h1>                        
                                <div className='text-danger text-end fs-1 fw-bold px-3'>{cartTotalQuantity}</div>
                            </div>
                            <div className='col-12 mt-3 card shadow'>
                                <h1 className='m-0 mx-2 mt-2 text-primary fs-2 fw-light'>PRECIO FINAL</h1>
                                <div className='text-danger text-end fs-1 fw-bold px-3'>${cartTotalPrice}</div>
                            </div>
                        </div>
                        <div className='row py-4 card-footer'>
                            {orderId == undefined &&(
                                <span className='text-secondary text-center'>
                                    Una vez finalizada la compra aquí verá el codigo de seguimiento.
                                </span>
                            )}
                            {orderId != undefined &&(
                                <span className='text-center text-secondary fw-bold'>
                                    TU CÓDIGO DE SEGUIMIENTO ES: <span className='text-primary'>{orderId}</span>
                                </span>
                            )}
                        </div>
                    </div>
                    <div className='col-3 m-3 card shadow-lg'>
                        <div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label text-primary fs-5 fw-light">Nombre</label>
                                    {buyerNameError && buyerName.length > 0 && (<span className='text-danger fs-6'> (ingrese mínimo 5 caracteres)</span>)}
                                    <input onChange={e => buyerNameChange(e.target.value)} type="text" placeholder="Ingrese su nombre..."
                                    className={buyerName.length == 0 ? 'form-control' : !buyerNameError ? 'form-control is-valid' : 'form-control is-invalid'}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-primary fs-5 fw-light">Teléfono</label>
                                    {buyerPhoneError && buyerPhone.length > 0 && (<span className='text-danger fs-6'> (ingrese mínimo 10 caracteres)</span>)}
                                    <input onChange={e => buyerPhoneChange(e.target.value)} type="number" placeholder="Ingrese su teléfono..."
                                    className={buyerPhone.length == 0 ? 'form-control' : !buyerPhoneError ? 'form-control is-valid' : 'form-control is-invalid'}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-primary fs-5 fw-light">Email</label>
                                    {buyerEmailError && buyerEmail.length > 0 && (<span className='text-danger fs-6'> (ingrese un email válido)</span>)}
                                    <input onChange={e => buyerEmailChange(e.target.value)} type="email" placeholder="Ingrese su email..."
                                    className={buyerEmail.length == 0 ? 'form-control' : !buyerEmailError ? 'form-control is-valid' : 'form-control is-invalid'}/>
                                </div>
                            </div>
                            <div className="row modal-footer">
                                <div className="col-6 m-0">
                                    <Link to="/" className="btn btn-secondary w-100">VOLVER</Link>
                                </div>
                                <div className="col-6 m-0">
                                    <button disabled={buyerNameError || buyerPhoneError || buyerEmailError} onClick={e => sendOrder(e)} className="btn btn-primary w-100">COMPRAR</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
    )
};