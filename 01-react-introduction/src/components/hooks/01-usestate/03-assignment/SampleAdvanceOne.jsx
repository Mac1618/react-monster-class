import React, { useState } from 'react';

const SampleAdvanceOne = () => {
  // using anonymus function with useState (only happens in first render)
	const [count, setCount] = useState(() => {
		const title = 10;
		return title;
	});
	const onIncrement = () => setCount(count + 1);

	return (
		<div>
			<h4>{count}</h4>
			<button onClick={onIncrement}>+</button>
		</div>
	);
};

export default SampleAdvanceOne;
