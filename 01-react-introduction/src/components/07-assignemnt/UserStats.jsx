import React from 'react';

const UserStats = ({ isAdmin, loggedIn }) => {
	const authentication = () => {
		return isAdmin && loggedIn ? 'Welcome Admin' : 'Welcome User';
	};
	return <div>{authentication()}</div>;
};

export default UserStats;
