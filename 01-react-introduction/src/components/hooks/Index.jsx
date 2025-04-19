import React from 'react';

import MainHooksOne from './01-usestate';
import HooksOne from './01-usestate/01-assignment/Index';
import HooksTwo from './01-usestate/02-assignment/Index';
import HooksThree from './01-usestate/03-assignment/Index';
import HooksFour from './01-usestate/04-assignment/Index';
import MainHooksTwo from './02-portal';
import MainHooksThree from './03-use-effect/Index';
import MainHooksFour from './04-context';
import MainHooksFive from './05-use-reducer/Index';
import MainHooksSix from './06-use-ref/Index';
import MainHooksSeven from './07-custom-hooks/Index';

const Hooks = () => {
	return (
		<div>
			{/* <MainHooksOne /> */}
			{/* <MainHooksTwo /> */}
			{/* <MainHooksThree /> */}
			{/* <MainHooksFour /> */}
			{/* <MainHooksFive /> */}
			{/* <MainHooksSix /> */}
			<MainHooksSeven/>
		</div>
	);
};

export default Hooks;
