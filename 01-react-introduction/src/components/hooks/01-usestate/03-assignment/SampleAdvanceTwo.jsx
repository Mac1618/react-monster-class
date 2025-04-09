import React, { useState } from 'react';

const SampleAdvanceTwo = () => {
	// using anonymus function with useState (only happens in first render)
	const [percent, setPercent] = useState(() => Math.floor(Math.random() * 100));
	const generateRandomPercent = () => {
		setPercent(Math.floor(Math.random() * 100));
	};

	return (
		<div>
			<h4>Percent: {percent}%</h4>
			<button onClick={generateRandomPercent}>Generate Ramdom Percent</button>
		</div>
	);
};

export default SampleAdvanceTwo;
