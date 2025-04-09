import React from 'react';
import ContextOne from './01-assignment';
import ContextTwo from './02-assignment/Index';

const MainHooksFour = () => {
	// Description
	// 1: props drilling from component A to B
	return (
		<>
			<ContextOne />
			<ContextTwo />
		</>
	);
};

export default MainHooksFour;
