import React, { useRef } from 'react';

const BasicUseRef = () => {
  // way to control "input DOM"
	const inputElement = useRef(null);

	console.log(inputElement);

  // logic 
	const handleInputElement = () => {
		inputElement.current.focus();
		return (inputElement.current.value = 'hello');
	};

	return (
		<section>
			<input type="text" ref={inputElement} />
			<button onClick={handleInputElement}>Focus & Write 'hello'</button>
		</section>
	);
};

export default BasicUseRef;
