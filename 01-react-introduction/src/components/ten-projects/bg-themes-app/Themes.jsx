import React, { useState } from 'react';
import './styles.css';

const Themes = () => {
	const [bgColor, setBgColor] = useState('white');
	const [textColor, setTextColor] = useState('#1b1b1b');
	const [btnColor, setBtnColor] = useState('white');

	const toggleThemeHandler = () => {
		setBgColor(bgColor === 'white' ? '#1b1b1b' : 'white');
		setTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b');
		setBtnColor(btnColor === 'white' ? '#1b1b1b' : 'white');
	};

	return (
		<div style={{ background: bgColor, color: textColor }}>
			<button
				onClick={toggleThemeHandler}
				style={{ background: btnColor, color: textColor, border: `2px solid ${btnColor}` }}
			>
				{bgColor === 'white' ? 'Light Mode' : 'Orange Mode'}
			</button>
			<section className="content">
				<h1>
					Welcom to A <br />
					Real World...
				</h1>
			</section>
		</div>
	);
};

export default Themes;
