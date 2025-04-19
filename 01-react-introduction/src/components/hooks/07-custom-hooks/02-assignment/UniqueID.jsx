import React, { useId } from 'react';

const UniqueID = () => {
	const id = useId();

	return (
		<div>
			<label htmlFor={`${id}-email`}>Email: </label>
			<input type="text" id={`${id}-email`} />
			<br />

			<label htmlFor={`${id}-password`}>Password</label>
			<input type="text" id={`${id}-password`} />
		</div>
	);
};

export default UniqueID;
