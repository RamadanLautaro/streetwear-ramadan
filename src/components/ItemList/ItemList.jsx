import React from 'react';
import "./ItemListStyle.css";
import Item from '../Item/Item';


function ItemList ({products}) {

	
	return (
		<>
			{products && products.length > 0 && (
				<>
					{products.map((product) => (
						<Item key={product.id} {...product} />
					))}
				</>
			)}
		</>
	);
};

export default ItemList;
