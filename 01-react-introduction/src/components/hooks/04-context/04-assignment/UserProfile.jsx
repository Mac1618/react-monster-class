import React, { useContext } from 'react';
import { UserContexts } from './UserContext';

const UserProfile = () => {
	const { username } = useContext(UserContexts);

	return (
		<div>
			<br />
			<h2>Challenge 1</h2>
			<h4>username value: {username.name}</h4>
		</div>
	);
};

export default UserProfile;
