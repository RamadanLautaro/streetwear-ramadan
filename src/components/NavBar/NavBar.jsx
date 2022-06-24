import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { CartWidget } from '../CartWidget/CartWidget.js';

export const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" bg="dark" variant="dark">
            <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src='/img/streetwear-logo.png' width={200}/>
                    </Link>
                <div className="navbar-nav">
                    <Link to="/category/camperas" className="nav-link pt-3">CAMPERAS</Link>
                    <Link to="/category/camisas" className="nav-link pt-3">CAMISAS</Link>
                    <Link to="/category/buzos" className="nav-link pt-3">BUZOS</Link>
                    <CartWidget width="40"/>
                </div>
            </div>
        </nav>
    );
};