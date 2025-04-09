import React, { useContext } from 'react';

import { DataContext, DataTwoContext } from './ComponentA';

const ComponentC = () => {
	const name = useContext(DataContext);
	const age = useContext(DataTwoContext);

	return (
		<div>
			<br />
			<h2>best approach with useContext</h2>
			<h4>context name: {name}</h4>
			<h4>context age: {age}</h4>
		</div>
	);
};

export default ComponentC;
