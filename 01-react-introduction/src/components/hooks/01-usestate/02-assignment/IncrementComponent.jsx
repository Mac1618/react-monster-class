import React from 'react';

const IncrementComponent = ({ count, onIncrement }) => {
	return (
		<div>
      <p>{count}</p>
			<button onClick={onIncrement}>Add</button>
		</div>
	);
};

export default IncrementComponent;
