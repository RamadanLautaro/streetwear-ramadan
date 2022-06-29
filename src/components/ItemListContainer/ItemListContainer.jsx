import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import "./ItemListContainerStyle.css";
import ItemList  from '../ItemList/ItemList';
import productsList from "../../utils/productsList";
import productsFetch from "../../utils/productsFetch";


function ItemListContainer () {

    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        productsFetch(0, productsList, id)
        .then((productsObt) => {
            
            setProducts(productsObt)

        })
        .catch((error) => alert(error))
        .finally(
            
            setTimeout(() => {
                setLoading(false)
            }, 0)
            
        )
    }, [id])


    return (
        <>
            <div className="row mt-5 mb-5 justify-content-center">
                <div className="col-10">
                    <div className="row">
                        <ItemList products={products}/>
                    </div>
                    <div className={loading ? "mostrar" : "ocultar"}>
                        <div className="row mt-5 justify-content-center">
                            <div className="col-12 text__center">
                                <div className="spinner-border text-primary" role="status"></div>
                                <div className="text-primary" role="status">Cargando productos...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemListContainer;