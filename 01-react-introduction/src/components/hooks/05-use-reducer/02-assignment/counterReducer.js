import { useReducer } from 'react';

// reducer || logic
const reducer = (state, action) => {
	switch (action.type) {
		case 'addition':
			// check action payload value
			return { ...state, counter: action.payload ? state.counter + action.payload : state.counter + 1 };

		case 'subtraction':
			// check action payload value
			return { ...state, counter: action.payload ? state.counter - action.payload : state.counter - 1 };

		case 'reset':
			return { ...state, counter: 0 };

		default:
			return state;
	}
};

const useCounterReducer = () => {
	const [state, dispatch] = useReducer(reducer, { counter: 0 });

	return {
		state,
		dispatch,
	};
};

export default useCounterReducer;
