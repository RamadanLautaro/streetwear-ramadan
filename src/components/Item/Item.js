import React from 'react';
import "./ItemStyle.css";

export const Item = (props) => {
    const {title, description, price, pictureUrl} = props;

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
                                <a className="btn btn-primary w-100">COMPRAR</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
	);
};