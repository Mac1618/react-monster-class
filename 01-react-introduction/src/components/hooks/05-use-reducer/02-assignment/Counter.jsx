import React, { useState } from 'react';
import useCounterReducer from './counterReducer';

const Counter = () => {
	const [count, setCount] = useState(0);
	const { state, dispatch } = useCounterReducer();

	return (
		<section>
			<br />
			<h2>Assignment 1: useReducer()</h2>
			<h4>count value: {state.counter}</h4>
			<input
				type="number"
				placeholder="custom count value"
				value={count}
				onChange={(e) => setCount(e.target.value)}
			/>
			<button onClick={() => dispatch({ type: 'addition', payload: parseInt(count) })}>+</button>
			<button onClick={() => dispatch({ type: 'subtraction', payload: parseInt(count) })}>-</button>
			<button onClick={() => dispatch({ type: 'reset', payload: parseInt(count) })}>reset</button>
		</section>
	);
};

export default Counter;
