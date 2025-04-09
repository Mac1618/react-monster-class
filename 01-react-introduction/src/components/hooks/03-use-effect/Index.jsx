import React from 'react';
import UseEffectOne from './01-asssignment';
import UseEffectTwo from './02-assignment/Index';
import UseEffectThree from './03-assignment/Index';

const MainHooksThree = () => {
	// Description:
	// 1: basic use of useEffect
	// 2: usage with api
	// 3: final challenge, basic usage, render based on dependecy, query api on first load
	return (
		<div>
			{/* <UseEffectOne />
			<UseEffectTwo /> */}
			<UseEffectThree />
		</div>
	);
};

export default MainHooksThree;
