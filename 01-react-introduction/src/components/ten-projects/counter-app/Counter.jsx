import React, { useState } from 'react';
import './styles.css';

const CounterApp = () => {
	const [counter, setCounter] = useState(0);

	const incrementHandler = () => {
		return setCounter(counter + 1);
	};

	const decrementHandler = () => {
		return setCounter(counter - 1);
	};

	return (
		<section className="container">
			<div>
				<h1 className="number">CounterApp: {counter}</h1>
			</div>
			<div>
				<button onClick={incrementHandler} className="increment">
					+
				</button>
				<button onClick={decrementHandler} className="increment">
					-
				</button>
			</div>
		</section>
	);
};

export default CounterApp;
