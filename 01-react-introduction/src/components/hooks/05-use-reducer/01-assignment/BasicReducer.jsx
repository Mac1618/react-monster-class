import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { ...state, count: state.count + 1 };

		case 'decrement':
			return { ...state, count: state.count - 1 };

		case 'reset':
			return { ...state, count: 0 };

		default:
			return state;
	}
};

const BasicReducer = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<section>
			<br />
			<h2>Use Reducer Sample</h2>
			<h4>Count value: {state.count}</h4>
			<button onClick={() => dispatch({ type: 'increment' })}>+</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>-</button>
			<button onClick={() => dispatch({ type: 'reset' })}>reset</button>
		</section>
	);
};

export default BasicReducer;
