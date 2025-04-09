import React, { useState } from 'react';

const TodoList = () => {
	const [inputValue, setInputValue] = useState('');
	const [items, setItems] = useState(() => {
		const lists = [];
		return lists;
	});
	const eventHandler = (event) => setInputValue(event.target.value);
	const addList = (e) => {
		e.preventDefault();
		setItems([...items, inputValue]);
		setInputValue('');
	};

	return (
		<div>
			<ul>
				{items.map((list, i) => (
					<li key={i}>{list}</li>
				))}
			</ul>

			<form onSubmit={addList}>
				<input type="text" value={inputValue} onChange={eventHandler} />
				<button onClick={addList}>add to list</button>
			</form>
		</div>
	);
};

export default TodoList;
