import React from 'react';

const UserList = () => {
	const users = [
		{
			id: 1,
			name: 'John',
			age: 29,
		},
		{
			id: 2,
			name: 'Alex',
			age: 33,
		},
		{
			id: 3,
			name: 'Catherine',
			age: 16,
		},
	];

	return (
		<div>
			{users.map(({ id, age, name }) => (
				<ol key={id}>
					<li>{age}</li>
					<li>{name}</li>
				</ol>
			))}
		</div>
	);
};

export default UserList;
