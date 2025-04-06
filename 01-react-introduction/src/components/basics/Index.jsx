import React from 'react';
import BasicsOne from './01-assignment/Index';
import BasicsTwo from './02-assignment/Index';
import BasicsThree from './03-assignment/Index';
import BasicFour from './04-assignment/Index';
import BasicsFive from './05-assignment/Index';
import BasicsSix from './06-assignment/Index';
import BasicsSeven from './07-assignemnt/Index';
import BasicsEight from './08-assignment/Index';

const Basics = () => {
	return (
		<div>
			{/* 01: basics */}
			<BasicsOne />

			{/* 02: basics */}
			<BasicsTwo />
			
      {/* 03: rules for components */}
			<BasicsThree />
			
      {/* 04: dynamic data */}
			<BasicFour />

			{/* 05: map */}
			<BasicsFive />

			{/* 06: props and children props */}
			<BasicsSix />

			{/* 07: conditional rendering */}
			<BasicsSeven />

			{/* 08: event handler attributes */}
			<BasicsEight />
		</div>
	);
};

export default Basics;
