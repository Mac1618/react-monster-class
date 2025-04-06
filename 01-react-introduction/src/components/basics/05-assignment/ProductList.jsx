import React from 'react';

const ProductList = () => {
	const products = [
		{
			id: 1,
			name: 'Iphone',
			price: '30,000',
		},
		{
			id: 2,
			name: 'Moouse pad',
			price: '130',
		},
		{
			id: 3,
			name: 'Router',
			price: '3,500',
		},
	];

	return (
		<div>
			{products.map(({ id, name, price }) => (
				<ol key={id}>
					<li>{name}</li>
					<li>{price}</li>
				</ol>
			))}
		</div>
	);
};

export default ProductList;
