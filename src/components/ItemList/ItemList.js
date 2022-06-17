import React, { useState } from 'react';
import { Item } from '../Item/Item.js';
import "./ItemListStyle.css";

export const ItemList = () => {

	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);

	const obtenerProductos = new Promise((resolve, reject) => {
		var productosObtenidos = [
			{ id: 1, title: "CAMPERA OSLO GREEN", description: "Corderoy y corderito. Color verde.", price: "24.590", pictureUrl: "/img/campera-oslo-green.png" },
			{ id: 2, title: "CAMPERA OSLO BROWN", description: "Corderoy y corderito. Color marrón.", price: "24.590", pictureUrl: "/img/campera-oslo-brown.png" },
			{ id: 3, title: "CAMPERA OSLO BORDO", description: "Corderoy y corderito. Color bordó.", price: "24.590", pictureUrl: "/img/campera-oslo-bordeau.png" },
			{ id: 4, title: "CAMISA REGULAR PINK", description: "Algodón. Color rosa.", price: "12.990", pictureUrl: "/img/camisa-regular-pink.png" },
			{ id: 5, title: "CAMISA OVERSIZE SCOTISH", description: "Paño. Color verde y azul.", price: "13.990", pictureUrl: "/img/camisa-oversize-scotish.png" },
			{ id: 6, title: "CAMISA OVERSIZE BEIGE", description: "Algodón. Color beige.", price: "13.990", pictureUrl: "/img/camisa-oversize-beige.png" },
			{ id: 7, title: "BUZO HEAVEN & HELL", description: "Frisa. Negro con estampa.", price: "17.990", pictureUrl: "/img/buzo-heavenNhell.png" },
			{ id: 8, title: "CROP-TOP NOT A BRAND", description: "Frisa. Negro con estampa.", price: "15.990", pictureUrl: "/img/crop-notAbrand.png" },
			{ id: 9, title: "CAMPERA MONKEY GRAFFITY", description: "Frisa. Negro con estampa.", price: "16.990", pictureUrl: "/img/campera-monkeyGraffiti.png" },
		];
	
		if (productosObtenidos.length > 0) {
			resolve(productosObtenidos);
		} else {
			reject("ERROR: no se pudieron obtener los productos.");
		}
	});

	obtenerProductos.then((productosObtenidos) => 
	setTimeout(() => {
		setProductos(productosObtenidos)
		setLoading(false)
	}, 2000))
	.catch((error) => alert(error))


	return (
		<div className="row mt-5 mb-5 justify-content-center">
			<div className="col-10">
				<div className="row">
					{productos.map((producto) => (
						<Item key={producto.id} {...producto} />
					))}
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
	);
};
