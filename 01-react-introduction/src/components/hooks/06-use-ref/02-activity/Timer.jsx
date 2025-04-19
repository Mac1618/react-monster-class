import React, { useEffect, useRef, useState } from 'react';

const Timer = () => {
	const [count, setCount] = useState(0);
	const timeRef = useRef(null);

	useEffect(() => {
		timeRef.current = setInterval(() => {
			setCount((prevVal) => prevVal + 1);
		}, 1000);

		return () => {
			clearInterval(timeRef.current);
		};
	}, []);
	return (
		<div>
			<h4>this will change to interval:{count}</h4>
			<button onClick={() => clearInterval(timeRef.current)}>stop time</button>
		</div>
	);
};

export default Timer;
