import React, { useContext, useState } from 'react';
import { UserContexts } from './UserContext';

const UpdateUser = () => {
	const { updateName } = useContext(UserContexts);
	const [name, setName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name.trim()) {
			updateName(name);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<button type="submit">update</button>
		</form>
	);
};

export default UpdateUser;
