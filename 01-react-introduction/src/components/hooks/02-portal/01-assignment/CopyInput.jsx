import React, { useState } from 'react';
import PopupContent from './PopupContent';

const CopyInput = () => {
	const [input, setInput] = useState('');
	const [copied, setCopied] = useState(false);

	const handleCopy = (e) => {
		e.preventDefault();
		setCopied(true);
		navigator.clipboard.writeText(input).then(() => {
			setInterval(() => setCopied(false), 2000);
		});
	};

	return (
		<form onSubmit={(e) => handleCopy(e)}>
			<input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
			<button type="submit">copy</button>
			<PopupContent copied={copied} />
		</form>
	);
};

export default CopyInput;
