import React, { useState, useEffect } from 'react';
import {collection, doc, getDocs, getDoc, getFirestore} from "firebase/firestore";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';


function ItemDetailContainer () {

    const itemId = useParams().id;
    const [product, setProduct] = useState([]);

    useEffect(() => {

        const db = getFirestore();
        const productDocument = doc(db, "products", itemId);
        
        getDoc(productDocument).then((snapshot) => {
           if(snapshot) {
                setProduct({id: snapshot.id, ...snapshot.data() });
            }
        })

    }, [])


    return (
    <>
        <ItemDetail {...product} />
    </>
    )
}

export default ItemDetailContainer;