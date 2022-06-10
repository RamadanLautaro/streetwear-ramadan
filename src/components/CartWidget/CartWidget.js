import React from 'react';
import cart_icon from '../../img/cart-icon.png';

export const CartWidget = (props) => {
    const { width } = props;

    return ( <
        a className = "nav-link"
        href = "#" >
        <
        img src = { cart_icon }
        width = { width }
        /> <
        /a>
    );
};