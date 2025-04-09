import React from 'react';

import { DataContext, DataTwoContext } from './ComponentA';

const ComponentC = () => {
	return (
		<DataContext.Consumer>
			{(name) => {
				return (
					<DataTwoContext.Consumer>
						{(age) => {
							return (
								<div>
									<h4>context name: {name}</h4>
									<h4>context age: {age}</h4>
								</div>
							);
						}}
					</DataTwoContext.Consumer>
				);
			}}
		</DataContext.Consumer>
	);
};

export default ComponentC;
