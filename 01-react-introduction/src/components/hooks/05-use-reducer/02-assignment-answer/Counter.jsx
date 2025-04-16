import React, { useReducer, useState } from 'react';
import { counterReducer } from './counterReducer';

const Counter = () => {
	const { initialState, reducer } = counterReducer();
	const [state, dispatch] = useReducer(reducer, initialState);
	const [newCount, setNewCount] = useState(0);

  // reducer handlers
	const handleIncrement = () => dispatch({ type: 'increment' });
	const handleDecrement = () => dispatch({ type: 'decrement' });
	const handleIncrementByAmount = () => {
		// "+" means convert "newCount" to number
		dispatch({ type: 'incrementByAmount', payload: +newCount });
		setNewCount(0);
	};
	const handleDecrementByAmount = () => {
		// "+" means convert "newCount" to number
		dispatch({ type: 'decrementByAmount', payload: +newCount });
		setNewCount(0);
	};

	return (
		<section>
			<br />
			<h2>Tutorial answer: </h2>
			<h4>count value: {state.counter}</h4>

			<div>
				<button onClick={handleIncrement}>+</button>
				<button onClick={handleDecrement}>-</button>
			</div>

			<br />
			<div>
				<input
					type="text"
					placeholder="custom count value..."
					value={newCount}
					onChange={(e) => setNewCount(e.target.value)}
				/>
				<button onClick={handleIncrementByAmount}>+</button>
				<button onClick={handleDecrementByAmount}>-</button>
			</div>
		</section>
	);
};

export default Counter;
