import React, { useState, useEffect } from 'react';
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList  from '../ItemList/ItemList';
import GLOBALS from '../../utils/globals';


function ItemListContainer () {

    const categoryId = useParams().id;
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const db = getFirestore();
        const q = query(
            collection(db, GLOBALS.PRODUCTS_COLLECTION),
            categoryId !== undefined ?
            where ("category", "==", categoryId) :
            where ("stock", ">=", 0)
        );
        
        getDocs(q).then((snapshot) => {
            if(snapshot.size > 0) {
                setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })));
                setLoading(false);
            }
        })
        .catch((error) => alert(error))
        
    }, [categoryId])


    return (
        <>
            {!loading && (
                <div className='container my-5 px-5 px-md-4 px-lg-3'>
                    <div className="row">
                        <ItemList products={products}/>
                    </div>
                </div>
            )}
            {loading && (
                <div className="row mt-5 justify-content-center">
                    <div className="col-12 text-center">
                        <div className="spinner-border text-primary" role="status"></div>
                        <div className="text-primary" role="status">Cargando productos...</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ItemListContainer;