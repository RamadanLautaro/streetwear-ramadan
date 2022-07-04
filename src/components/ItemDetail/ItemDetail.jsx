import React, { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { CartContext } from '../CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetailStyle.css";


function ItemDetail (item) {

    const {title, description, price, pictureUrl, stock} = item;
    const [unidades, setUnidades] = useState(1);
    const handleUnidades = (value) => setUnidades(value);
    const {addItem} = useContext(CartContext);

    const agregarAlCarrito = (e) => {
        e.preventDefault();
        addItem(item, unidades);
    }

    
    return (
    <>
        <div className="row mt-2 mb-2 justify-content-center">
            <div className="col-8">
                <div className="m-3 card shadow-lg item__card text__center">
                    <div className='row'>
                        <div className='col-8'>
                            <img className="mt-3" src={pictureUrl} />
                        </div>
                        <div className='col-4 item__detail__aside'>
                            <div className="row mt-5 pb-5">
                                <div className="col-12">
                                    <h4 className="card-title">{title}</h4>
                                    <p className="card-text">{description}</p>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-12">
                                    <span className="text-primary item__detail__price">${price}</span>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <span>UNIDADES SELECCIONADAS: <span className="text-primary"><strong>{unidades}</strong></span></span>
                            </div>
                            <div className="row mt-5 justify-content-center">
                                <ItemCount stock={stock} initial="1" changeUnidades={handleUnidades}/>
                            </div>
                            <div className="row mt-2 justify-content-center">
                                <div className="col-10 p-0">
                                    <button className="btn btn-primary w-100" onClick={(e) => agregarAlCarrito(e)}>AGREGAR AL CARRITO</button>
                                    {/* <Link to="/cart" className="btn btn-primary w-100">FINALIZAR COMPRA</Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
} 

export default ItemDetail;