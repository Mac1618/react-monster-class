import React, { useEffect, useState } from 'react';

const CounterEffect = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const value = (document.title = `value: ${counter}`);
		console.log(value);
	}, []);

	return (
		<section>
			<h4>counter: {counter}</h4>
			<button onClick={() => setCounter(counter + 1)}>add</button>
		</section>
	);
};

export default CounterEffect;
