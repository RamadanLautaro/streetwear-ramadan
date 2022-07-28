import React, { useState, useEffect } from 'react';
import { doc, getDoc, getFirestore} from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import GLOBALS from '../../utils/globals';


function ItemDetailContainer () {

    const itemId = useParams().id;
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const db = getFirestore();
        const productDocument = doc(db, GLOBALS.PRODUCTS_COLLECTION, itemId);
        
        getDoc(productDocument).then((snapshot) => {
           if(snapshot) {
                setProduct({id: snapshot.id, ...snapshot.data() });
                setLoading(false);
            }
        })
        .catch((error) => alert(error))

    }, [])


    return (
    <>  
        {!loading && (
            <ItemDetail {...product} />
        )}
        {loading && (
            <div className="row mt-5 justify-content-center">
                <div className="col-12 text-center">
                    <div className="spinner-border text-primary" role="status"></div>
                    <div className="text-primary" role="status">Cargando producto...</div>
                </div>
            </div>
        )}
    </>
    )
}

export default ItemDetailContainer;