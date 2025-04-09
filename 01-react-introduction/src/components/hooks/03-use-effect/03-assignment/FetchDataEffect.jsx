import React, { useState } from 'react';

const FetchDataEffect = () => {
	const [items, setItems] = useState([]);

	useState(() => {
		const getData = async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts');
			const data = await response.json();
			setItems(data);
		};

		getData();
	}, [items]);

	return (
		<section>
			<h4>data mapping</h4>
			{items.map((item) => (
				<div key={item.id}>
					<li>title: {item.title}</li>
					<li>body: {item.body}</li>
				</div>
			))}
		</section>
	);
};

export default FetchDataEffect;
