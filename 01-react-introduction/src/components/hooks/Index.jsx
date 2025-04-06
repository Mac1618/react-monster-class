import React from 'react';
import HooksOne from './01-assignment/Index';
import HooksTwo from './02-assignment/Index';
import HooksThree from './03-assignment/Index';
import HooksFour from './04-assignment/Index';

const Hooks = () => {
	// NOTES:
	// 1. HooksOne	- basic understanding of useState with variables, arrays, objects, arrays of objects and functions
	// 2. HooksTwo	- useState with props for reusability
	// 3. HooksThree	- advanced use case for useState (only happens in first render)

	return (
		<div>
			{/* <HooksOne />
			<HooksTwo />
			<HooksThree /> */}
			<HooksFour />
		</div>
	);
};

export default Hooks;
