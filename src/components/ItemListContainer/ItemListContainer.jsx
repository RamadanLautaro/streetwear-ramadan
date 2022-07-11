import React, { useState, useEffect } from 'react';
import {collection, getDocs, getDoc, getFirestore, query, where} from "firebase/firestore";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import "./ItemListContainerStyle.css";
import ItemList  from '../ItemList/ItemList';


function ItemListContainer () {

    const categoryId = useParams().id;
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    console.log("parametro:" + useParams().id)

    useEffect(() => {

        const db = getFirestore();
        const q = query(
            collection(db, "products"),
            categoryId != undefined ?
            where ("category", "==", categoryId, "&&", "stock", ">", 0) :
            where ("stock", ">", 0)
        );
        
        getDocs(q).then((snapshot) => {
            if(snapshot.size > 0) {
                setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })));
                setLoading(false);
            }
        })
        // .catch((error) => alert(error))
        // .finally(setLoading(false))
        
    }, [categoryId])


    return (
        <>
            <div className="row m-0 mt-5 mb-5 justify-content-center">
                <div className="col-10">
                    <div className="row">
                        <ItemList products={products}/>
                    </div>
                    <div className={loading ? "mostrar" : "ocultar"}>
                        <div className="row mt-5 justify-content-center">
                            <div className="col-12 text__center">
                                <div className="spinner-border text-primary" role="status"></div>
                                <div className="text-primary" role="status">Cargando productos...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemListContainer;