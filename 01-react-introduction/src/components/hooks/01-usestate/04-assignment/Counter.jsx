import React, { useState } from 'react';

const Counter = () => {
	const [counter, setCounter] = useState(0);
	const onIncrement = () => setCounter(counter + 1);
	const onDecrement = () => setCounter(counter - 1);

	return (
		<div>
			<h4>{counter}</h4>
			<button onClick={onIncrement}>+</button>
			<button onClick={onDecrement}>-</button>
		</div>
	);
};

export default Counter;
