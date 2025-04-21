import React, { useState } from 'react';
import './styles.css';

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	const submitHandler = () => {
		setTodos((todo) => {
			return todo.concat({
				text: input,
				id: Math.floor(Math.random() * 10),
			});
		});

		return setInput('');
	};

	const removeHandler = (id) => {
		return setTodos((todo) => todo.filter(t => t.id !== id));
	};

	return (
		<section className="container">
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				style={{ color: 'black' }}
				placeholder="add todo list..."
			/>
			<button onClick={submitHandler}>add todo</button>

			<ul className="todos-list">
				{todos &&
					todos.map(({ text, id }) => (
						<li className="todo" key={id}>
							<span style={{ color: 'black' }}>{text}</span>
							<button className="close" onClick={() => removeHandler(id)}>
								x
							</button>
						</li>
					))}
			</ul>
		</section>
	);
};

export default Todo;
