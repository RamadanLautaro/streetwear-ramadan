import React from 'react';
import { useNavigate } from "react-router-dom";
import "./ItemStyle.css";


function Item ({id, title, description, stock, price, pictureUrl}) {

    let navigate = useNavigate();


	return (
        <div className="col-12 col-md-6 col-lg-4 px-2">
            <div className={stock > 0 ? 'card mt-4 shadow-lg text-center item__card' : 'card mt-4 shadow-lg text-center item__card item__agotado'}>
                <img src={pictureUrl} alt={title}/>
                <div className="card-body px-1 my-2">
                    <div className="container fs-5 fw-bold p-0">{title}</div>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-6">
                            {stock > 0 && (<span className="fs-4 fw-bold text-primary">${price}</span>)}
                            {stock === 0 && (<span className="fs-4 fw-bold text-danger">AGOTADO</span>)}                             
                        </div>
                        <div className="col-6">
                            <button onClick={() => {navigate(`/item/${id}`)}} disabled={stock === 0} className={stock > 0 ? 'btn btn-primary w-75' : 'btn btn-secondary w-75'}>VER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
};

export default Item;