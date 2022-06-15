import React from 'react';
import "./ItemListContainerStyle.css";

export const ItemListContainer = (props) => {
    const {mensaje} = props;

    return (
        <div className='pt-5 text__center'>
            <h1>{mensaje}</h1>
        </div>
    );
};