import React, { useState } from 'react';
import "./ItemCountStyle.css";

function ItemCount ({stock, initial, changeUnidades}) {
    
    const [count, setCount] = useState(parseInt(initial));

	const changeCount = (op) => {
        const action = op;

        if (action == "agregar" && count != stock) {
            setCount(count + 1);
            changeUnidades(count + 1);
        }
        else if(action == "quitar" && count != 1) {
            setCount(count - 1);
            changeUnidades(count - 1);
        }
	};


    return (
        <>
            <div className="col-10 card border-primary shadow">
                <div className="row p-3">
                    {/* <div className="col-12 text-primary text__center">
                        {<h1>{count}</h1>}
                    </div> */}
                    <div className="col-6">
                        <button className="btn btn-secondary w-100 fw-bolder" onClick={(e) => changeCount("quitar")}>-</button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-primary w-100 fw-bolder" onClick={(e) => changeCount("agregar")}>+</button>
                    </div>
                </div>
            </div>
        </>   
    );
};

export default ItemCount;