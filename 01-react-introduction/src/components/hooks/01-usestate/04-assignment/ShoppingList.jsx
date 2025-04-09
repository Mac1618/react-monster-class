import React, { useState } from 'react';

const ShoppingList = () => {
	const [lists, setLists] = useState(() => {
		const list = [
			{
				id: null,
				name: null,
				quantity: null,
			},
		];
		return list;
	});
	const [name, setName] = useState('');
	const [quality, setQuality] = useState('');
	const onSubmit = (e) => {
		e.preventDefault();
		if (!name || !quality) return;
		setLists([
			...lists,
			{
				id: lists.length,
				name: name,
				quantity: parseInt(quality),
			},
		]);
		setName('');
		setQuality('');
	};

	return (
		<div>
			{lists.map((l) => (
				<ul key={l.id}>
					<li>name: {l.name}</li>
					<li>quality: {l.quantity}</li>
				</ul>
			))}

			<form onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Quantity"
					value={quality}
					onChange={(e) => setQuality(e.target.value)}
				/>
				<button type="submit">submit</button>
			</form>
		</div>
	);
};

export default ShoppingList;
