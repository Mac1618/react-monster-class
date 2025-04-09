import React from 'react';
import Counter from './Counter';
import TodoList from './TodoList';
import Profile from './Profile';
import ShoppingList from './ShoppingList';

const HooksFour = () => {
	return (
		<div>
			<Counter />
      <TodoList/>
      <Profile />
      <ShoppingList/>
		</div>
	);
};

export default HooksFour;
