import React, {useContext} from "react";
import { CartContext } from '../CartContext/CartContext';
import './CartItemStyle.css';


function CartItem ({id, title, price, pictureUrl, quantity, subtotalPrice}) {

    const {removeItem} = useContext(CartContext);

    const deleteItem = (e, itemId) => {
        e.preventDefault();
        removeItem(itemId);
    }

    
    return (
        <div className="col-8 card shadow mt-2">
            <div className="row card-body">
                <div className="col-2">
                    <img className="cartItem__picture" src={pictureUrl} alt={title} />
                </div>
                <div className="col-8">
                    <h2 className="card-title">{title}</h2>
                    <span className="text-primary fs-3">${price} (SUBTOTAL: ${subtotalPrice})</span>
                </div>
                <div className="col-2">
                    <div className="text-primary cartItem__quantity">{quantity}</div>
                    <button className="btn btn-danger w-100 cartItem__button" onClick={(e) => deleteItem(e, id)}>ELIMINAR</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;