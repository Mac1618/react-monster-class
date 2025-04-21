import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './styles.css';

const HiddenSearchBar = () => {
	const [showInput, setShowInput] = useState(false);
	const [bgColor, setBgColor] = useState('white');

	const hideInputHandler = (e) => {
		setBgColor('#1a1a1a');

		if (e.target.className === 'container') {
			setShowInput(false);
			setBgColor('fff');
		}
	};

	return (
		<section className="container" style={{ background: bgColor }} onClick={hideInputHandler}>
			{showInput ? (
				<input type="text" placeholder="Search..." />
			) : (
				<FaSearch
					style={{ color: bgColor === 'white' ? 'black' : 'white' }}
					onClick={() => setShowInput(true)}
				/>
			)}
		</section>
	);
};

export default HiddenSearchBar;
