import React from 'react';
import ComponentB from './ComponentB';

const ComponentA = () => {
	const name = 'Mark';
	return (
		<div>
			<h4>ComponentA</h4>
			<ComponentB name={name} />
		</div>
	);
};

export default ComponentA;
