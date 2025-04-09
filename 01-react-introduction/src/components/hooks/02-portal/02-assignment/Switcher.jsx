import React, { useState } from 'react';

const Switcher = () => {
	const [mode, setMode] = useState(false);

	return (
		<>
			<h1>{mode ? 'Dark' : 'Light'}</h1>
			<button onClick={() => setMode(!mode)}>switch</button>

			{/* sample 1: on swap of "keys" we can store it in "database" or "localStorage" */}
			<div>
				<input type="text" key={mode ? 'Dark' : 'Light'} />
			</div>

			{/* sample 2: basic sample to swtich placeHolder */}
			<div>
				<input type="text" placeholder={mode ? 'Dark' : 'Light'} />
			</div>
		</>
	);
};

export default Switcher;
