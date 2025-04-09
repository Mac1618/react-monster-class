import React, { useState } from 'react';
import DecrementComponent from './DecrementComponent';
import IncrementComponent from './IncrementComponent';

const Main = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h4>{count}</h4>
			<IncrementComponent count={count} onIncrement={() => setCount(count + 1)}/>
			<DecrementComponent count={count} onDecrement={() => setCount(count - 1)}/>
		</div>
	);
};

export default Main;
