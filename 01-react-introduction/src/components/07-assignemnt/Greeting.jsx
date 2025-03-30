import React from 'react';

export const Greeting = ({ greet }) => {
	const handleGreet = () => {
		return (greet === 'morning' && 'Good morning') || (greet === 'afternoon' && 'Good afternoon');
	};

	return <div>{handleGreet()}</div>;
};
