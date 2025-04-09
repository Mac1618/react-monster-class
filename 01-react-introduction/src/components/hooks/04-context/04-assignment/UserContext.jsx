import React, { createContext, useState } from 'react';
import UpdateUser from './UpdateUser';

export const UserContexts = createContext();

const UserProvider = ({ children }) => {
	const [username, setUsername] = useState({ name: 'Mark' });

	const updateName = (newName) => {
		console.log(newName, 'test');

		setUsername({
			name: newName,
		});
	};

	return <UserContexts.Provider value={{ username, updateName }}>{children}</UserContexts.Provider>;
};

export default UserProvider;
