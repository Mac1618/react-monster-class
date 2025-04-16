import React, { useRef } from 'react';

const FocusInput = () => {
	const inputRef = useRef(null);

	const handleInputRef = () => {
		if (inputRef.current) {
			inputRef.current.placeholder = 'Manipulating DOM';
			inputRef.current.value = 'placeholder manipulation';
			inputRef.current.focus();
			return (inputRef.current.diable = true);
		}
	};
	return (
		<section>
			<input type="text" ref={inputRef} />
			<button onClick={handleInputRef}>Modify Input with DOM</button>
		</section>
	);
};

export default FocusInput;
