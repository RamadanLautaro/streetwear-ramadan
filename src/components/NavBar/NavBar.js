import React from 'react';
import Logo from '../../img/streetwear-logo.png';
import { CartWidget } from '../CartWidget/CartWidget.js';

export const NavBar = () => {
    return ( <
        nav className = "navbar navbar-expand-lg navbar-dark bg-dark"
        bg = "dark"
        variant = "dark" >
        <
        div className = "container-fluid" >
        <
        a className = "navbar-brand"
        href = "#" >
        <
        img src = { Logo }
        width = { 200 }
        /> <
        /a> <
        div className = "navbar-nav" >
        <
        a className = "nav-link pt-3"
        href = "#" > PRODUCTOS < /a> <
        a className = "nav-link pt-3"
        href = "#" > SALE < /a> <
        CartWidget width = "40" / >
        <
        /div> <
        /div> <
        /nav>
    );
};