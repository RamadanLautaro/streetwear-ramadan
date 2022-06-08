import React from 'react';
import Logo from '../../img/streetwear-logo.png'

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
        a className = "nav-link"
        href = "#" > PRODUCTOS < /a> <
        a className = "nav-link"
        href = "#" > SALE < /a> <
        a className = "nav-link"
        href = "#" > CARRITO < /a> <
        /div> <
        /div> <
        /nav>
    );
};