import React from 'react';

const DecrementComponent = ({ count, onDecrement }) => {
	return (
		<div>
			<p>{count}</p>
			<button onClick={onDecrement}>-</button>
		</div>
	);
};

export default DecrementComponent;
