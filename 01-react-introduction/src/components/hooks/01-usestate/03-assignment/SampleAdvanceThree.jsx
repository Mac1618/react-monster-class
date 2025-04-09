import React, { useEffect, useState } from 'react';

const SampleAdvanceThree = () => {
  // using anonymus function with useState (only happens in first render)
	const [store, setStore] = useState(() => {
		const savedName = localStorage.getItem('name');
		return savedName ? JSON.parse(savedName) : '';
	});

	useEffect(() => {
		localStorage.setItem('name', JSON.stringify(store));
	}, [store]);

	const eventHandler = (event) => {
		return setStore(event.target.value);
	};

	const clearStorage = () => setStore('');

	return (
		<div>
			<h4>Name: {store}</h4>
			<input type="text" value={store} onChange={eventHandler} placeholder="enter your name" />
			<button onClick={clearStorage}>clear</button>
		</div>
	);
};

export default SampleAdvanceThree;
