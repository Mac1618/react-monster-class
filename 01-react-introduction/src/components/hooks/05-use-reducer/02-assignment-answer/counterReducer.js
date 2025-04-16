export const counterReducer = () => {
	const initialState = { counter: 0 };

	const reducer = (state, action) => {
    // reducer || logic
		switch (action.type) {
			case 'increment':
				return { ...state, counter: state.counter + 1 };

			case 'decrement':
				return { ...state, counter: state.counter - 1 };

			case 'incrementByAmount':
				return { ...state, counter: state.counter + action.payload };

			case 'decrementByAmount':
				return { ...state, counter: state.counter + action.payload };

			default:
				return state;
		}
	};

	return {
		reducer,
		initialState,
	};
};
