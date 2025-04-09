import React, { useEffect } from 'react';

const BasicEffect = () => {
	useEffect(() => {
		console.log('Will always run once');
	}, []);

	return <div>BasicEffect</div>;
};

export default BasicEffect;
