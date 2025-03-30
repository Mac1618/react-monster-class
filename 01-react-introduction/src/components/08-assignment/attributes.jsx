import React from 'react';

const handleCopy = () => {
	alert('got copied');
};

const handleHover = () => {
	alert('got hoverd');
};

const handleClick = () => {
	alert('got clicked');
};

const Attributes = () => {
	return (
		<div>
			<h4>on copy attribute</h4>
			<p onCopy={handleCopy}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, totam?
			</p>
			<br />
			<h4>on hover attribute</h4>
			<p onMouseOver={handleHover}>Lorem ipsum dolor</p>
			<br />
			<h4>on click attribute</h4>
			<button onClick={handleClick}>click me</button>
		</div>
	);
};

export default Attributes;
