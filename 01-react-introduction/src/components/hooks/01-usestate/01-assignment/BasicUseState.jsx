import React, { useState } from 'react';

const BasicUseState = () => {
	// simple variable
	const [count, setCount] = useState(0);
	const handlePlus = () => setCount(count + 1);
	const handleMinus = () => setCount(count - 1);

	// using array
	const [newFriend, setNewFriend] = useState('');
	const [friends, setFriends] = useState(['Joan', 'Jaine']);
	const AddFriend = () => setFriends([...friends, newFriend]);
	const resetFriend = () => setFriends(friends.filter((f) => f === 'Joan' || f === 'Jaine'));
	const updateFriends = () =>
		setFriends(friends.map((f, i) => (f === 'Joan' || f === 'Jaine' ? f : `New Buddy ${i + 1}`)));

	// using objects
	const [movie, setMovie] = useState({
		title: 'The Purge',
		rating: 7.5,
	});
	const changeRating = () => setMovie({ ...movie, rating: 4.3 });

	// using array of objects
	const [movies, setMovies] = useState([
		{
			id: 1,
			title: 'One piece',
			rating: 10,
		},
		{
			id: 2,
			title: 'Solo Leveling',
			rating: 9.8,
		},
	]);
	const changeMovieName = () =>
		setMovies(movies.map((m) => (m.id === 2 ? { ...m, title: 'Ragnarok' } : m)));

	return (
		<>
			{/* objects and array of objects */}
			<div>
				<h2>Movie 1</h2>
				<p>Title: {movie.title}</p>
				<p>rating: {movie.rating}</p>
				<button onClick={changeRating}>change rating</button>
				<br />

				<h2>Movie 2</h2>
				{movies.map((m) => (
					<ul key={m.id}>
						<li>{m.title}</li>
						<li>{m.rating}</li>
					</ul>
				))}
				<button onClick={changeMovieName}>change rating</button>
			</div>

			{/* arrays */}
			<div>
				<ul>
					{friends.map((friend, index) => (
						<li key={index}>{friend}</li>
					))}
				</ul>
				<input type="text" value={newFriend} onChange={(e) => setNewFriend(e.target.value)} />
				<button onClick={AddFriend}>add friend</button>
				<button onClick={resetFriend}>reset friend</button>
				<button onClick={updateFriends}>update friends</button>
			</div>

			{/* simple variables */}
			<div>
				<h4>{count}</h4>
				<button onClick={handlePlus}>+</button>
				<button onClick={handleMinus}>-</button>
			</div>
		</>
	);
};

export default BasicUseState;
