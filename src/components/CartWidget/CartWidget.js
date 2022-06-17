import React from 'react';

export const CartWidget = (props) => {
    const { width } = props;

    return ( 
        <a className="nav-link" href="#">
            <img src='/img/cart-icon.png' width={width}/>
        </a>
    );
};