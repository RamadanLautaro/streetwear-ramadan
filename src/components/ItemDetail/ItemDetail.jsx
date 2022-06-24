import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetailStyle.css";


function ItemDetail ({title, description, price, pictureUrl, stock}) {
    return (
    <>
        <div className="row mt-5 mb-5 justify-content-center">
            <div className="col-8">
                <div className="m-3 card shadow-lg item__card text__center">
                    <div className='row'>
                        <div className='col-8'>
                            <img className="mt-3" src={pictureUrl} />
                        </div>
                        <div className='col-4 item__detail__aside'>
                            <div className="row mt-5 pb-5">
                                <h3 className="card-title">{title}</h3>
                                <p className="card-text">{description}</p>
                            </div>
                            <div className="row mt-5">
                         
                                    <span className="text-primary item__detail__price">${price}</span>

                            </div>
                            <div className="row mt-5 pt-5 justify-content-center">
                                <ItemCount stock={stock} initial="1"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
} 

export default ItemDetail;