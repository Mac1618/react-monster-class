import React from 'react';
import ContextOne from './01-assignment';
import ContextTwo from './02-assignment/Index';
import ContextThree from './03-assignment/Index';
import ContextFour from './04-assignment/Index';

const MainHooksFour = () => {
	// Description
	// 1: props drilling from component A to B
	// 2: using consumer with context api
	// 3: using useContext (better alternative with consumer)
	// 4: challenge updating state with useContext
	return (
		<>
			<ContextOne />
			<ContextTwo />
			<ContextThree />
			<ContextFour />
		</>
	);
};

export default MainHooksFour;
