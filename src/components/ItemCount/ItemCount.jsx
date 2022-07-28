import React, { useState } from 'react';
import "./ItemCountStyle.css";


function ItemCount ({stock, initial, changeUnidades}) {
    
    const [count, setCount] = useState(parseInt(initial));

	const changeCount = (op) => {
        const action = op;

        if (action === "agregar" && count !== stock) {
            setCount(count + 1);
            changeUnidades(count + 1);
        }
        else if(action === "quitar" && count !== 1) {
            setCount(count - 1);
            changeUnidades(count - 1);
        }
	};


    return (
        <div className="row mt-1">
            <div className="col-4">
                <button className="btn btn-secondary w-100 h-100 fw-bolder" disabled={stock === 0} onClick={(e) => changeCount("quitar")}>-</button>
            </div>
            <div className="col-4">
                <div className="fs-3 fw-bold text-primary text-center">
                    {stock > 0 && (count)}
                    {stock === 0 && (0)}
                </div>
            </div>
            <div className="col-4">
                <button className="btn btn-primary w-100 h-100 fw-bolder" disabled={stock === 0} onClick={(e) => changeCount("agregar")}>+</button>
            </div>
        </div>
    );
};

export default ItemCount;