import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

export const CartWidget = (props) => {
    const { width } = props;

    return ( 
        <Link className="nav-link" to="/cart">
            <img src='/img/cart-icon.png' width={width}/>
        </Link>
    );
};