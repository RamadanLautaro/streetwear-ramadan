import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";


function ItemDetail (item) {

    const {id, title, description, price, pictureUrl, stock} = item;
    const [unidades, setUnidades] = useState(1);
    const handleUnidades = (value) => setUnidades(value);
    const {addItem, cart} = useContext(CartContext);

    const [temporaryStock, setTemporaryStock] = useState(stock);
    const [quantityInCart, setQuantityInCart] = useState(0);

    useEffect(() => {

        const itemInCart = cart.find(x => x.id === id);
        if(itemInCart) {
            setTemporaryStock(itemInCart.stock - itemInCart.quantity);
            setQuantityInCart(itemInCart.quantity);
        }

    }, [temporaryStock])

    const agregarAlCarrito = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const itemAdded = addItem(item, unidades, temporaryStock-unidades);
        setTemporaryStock(stock - itemAdded.quantity);
    }

    
    return (
        <div className='container'>
            <div className="row mt-3 mt-md-5 pt-md-4 justify-content-center">
                <div className="col-12 col-md-12 col-lg-10">
                    <div className="card shadow-lg justify-content-center">
                            <div className='row'>
                                <div className='text-center col-12 col-md-5 col-lg-4'>
                                    <img className="mt-1 mt-md-5 w-100" src={pictureUrl} alt={title}/>
                                </div>
                                <div className='col-12 col-md-7 col-lg-8 text-center'>
                                    <h4 className="card-title mt-md-5 pt-3 fs-2 text-primary fw-bold">{title}</h4>
                                    <p className="card-text">{description}</p>
                                    <div className="text-primary mt-md-5 fs-1 fw-bold">${price}</div>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='row mb-2'>
                                    <div className="col-12 col-md-6 col-lg-4 mt-3 mt-lg-5">
                                        <div className='card h-100 shadow p-3 border-primary text-center'>
                                            <div className='fs-6'>UNIDADES DISPONIBLES: <span className="text-primary"><strong>{stock}</strong></span></div>
                                            <div className='fs-6'>CANT. EN EL CARRITO: <span className="text-primary"><strong>{quantityInCart}</strong></span></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4 mt-3 mt-lg-5">
                                        <div className='card h-100 shadow p-3 border-primary'>
                                            <ItemCount stock={temporaryStock} initial="1" changeUnidades={handleUnidades}/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 mt-3 mt-lg-5 justify-content-center">
                                        <button className="btn btn-primary w-100 w-lg-100" disabled={temporaryStock === 0} onClick={(e) => agregarAlCarrito(e)}>AGREGAR AL CARRITO</button>
                                        {temporaryStock !== stock &&(
                                            <Link to="/cart" className="btn btn-secondary mt-2 w-100 w-lg-100">FINALIZAR COMPRA</Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default ItemDetail;