import React, { useState } from 'react';

const Profile = () => {
	const [user, setUser] = useState({
		name: 'Mark',
		age: 21,
	});

	const eventHandler = (e) => {
		const { value, name } = e.target;

		return setUser((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<div>
			<ul>
				<li>name: {user.name}</li>
				<li>age: {user.age}</li>
			</ul>

			<input type="text" placeholder="Name" value={user.name} name="name" onChange={eventHandler} />
			<input type="number" placeholder="Age" value={user.age} name="age" onChange={eventHandler} />
		</div>
	);
};

export default Profile;
