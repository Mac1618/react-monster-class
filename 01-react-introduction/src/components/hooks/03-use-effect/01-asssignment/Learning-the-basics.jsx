import React, { useEffect, useState } from 'react';

const LearningTheBasics = () => {
	const [value, setValue] = useState(0);
	const [something, setSomething] = useState(0);

	useEffect(() => {
		console.log('this will render');
		document.title = `Increment ${value}`;
	}, [value]); // only renders if "value" changes

	return (
		<div>
			<h4>{value}</h4>
			<button onClick={() => setValue(value + 1)}>click me</button>
			<button onClick={() => setSomething(something + 1)}>Increment by somthing</button>
		</div>
	);
};

export default LearningTheBasics;
