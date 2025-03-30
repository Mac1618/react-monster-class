import React from 'react';

const Greeting = () => {
	const greetings = 'John';
	const date = Date();

	return (
		<div>
			<h1>Greeting to you {greetings}</h1>
			<p>{date}</p>
		</div>
	);
};

export default Greeting;
