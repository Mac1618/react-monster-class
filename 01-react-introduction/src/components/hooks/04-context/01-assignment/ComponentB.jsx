import React from 'react';
import ComponentC from './ComponentC';

const ComponentB = ({ name }) => {
	return (
		<div>
			<h4>ComponentB</h4>
			<ComponentC name={name} />
		</div>
	);
};

export default ComponentB;
