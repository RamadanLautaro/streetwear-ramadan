import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import productsList from "../../utils/productsList";
import productsFetch from "../../utils/productsFetch";


function ItemDetailContainer () {

    const {id} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productsFetch(0, productsList)
        .then((productsObt) => {setProducts(productsObt.find(producto => producto.id === parseInt(id)))})
    }, [])


    return (
    <>
        <ItemDetail {...products} />
    </>
    )
}

export default ItemDetailContainer;