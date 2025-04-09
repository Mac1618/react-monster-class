import React from 'react';
import UpdateUser from './UpdateUser';
import { default as UserContext, default as UserProvider } from './UserContext';
import UserProfile from './UserProfile';

const ContextFour = () => {
  // Description:
  // UserProvider: A wrapper component that provides the context values (e.g., "username" and "updateName").
  // UserProfile:  A component that consumes and displays the context value (e.g., "username").
  // UpdateUser:   A component that consumes and updates the context value (e.g., "updateName").

	return (
		<UserProvider>
			<UserProfile />
			<UpdateUser />
		</UserProvider>
	);
};

export default ContextFour;
