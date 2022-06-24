import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import "./ItemStyle.css";


function Item ({id, title, description, price, pictureUrl}) {


	return (
		<>
			<div className="col-4">
                <div className="m-3 card shadow-lg item__card text__center">
                    <img className="mt-3" src={pictureUrl} />
                    <div className="card-body mt-2 mb-2">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{description}</p>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-6">                            
                                <span className="text-primary item__price">${price}</span>
                            </div>
                            <div className="col-6">
                                <Link to={`/item/${id}`} className="btn btn-primary w-100">VER PRODUCTO</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
	);
};

export default Item;