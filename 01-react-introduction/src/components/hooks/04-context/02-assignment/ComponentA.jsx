import React, { createContext } from 'react';
import ComponentB from './ComponentB';

export const DataContext = createContext();
export const DataTwoContext = createContext();

const ComponentA = () => {
	const name = 'Laurence';
	const age = 25;
  
	return (
		<DataContext.Provider value={name}>
			<DataTwoContext.Provider value={age}>
				<ComponentB />
			</DataTwoContext.Provider>
		</DataContext.Provider>
	);
};

export default ComponentA;
