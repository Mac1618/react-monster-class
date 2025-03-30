import React from 'react';

export const ProductInfo = () => {
	const myObj = {
		name: 'Laptop',
		price: '20,000 php',
		availability: 'In stock',
	};
	return (
		<div>
			<p>{`Model: ${myObj.name}`}</p>
			<p>{`Price: ${myObj.price}`}</p>
			<p>{`Availability: ${myObj.availability}`}</p>
		</div>
	);
};
