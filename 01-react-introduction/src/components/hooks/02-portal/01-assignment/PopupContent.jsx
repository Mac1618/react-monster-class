import React from 'react';
import { createPortal } from 'react-dom';
const PopupContent = ({ copied }) => {
	if (!copied) return null;

	return createPortal(
		<section style={{ position: 'absolute', bottom: '3rem' }}>
			{copied && <h4>Copied successfully!</h4>}
		</section>,
		document.querySelector('#popup-content')
	);
};

export default PopupContent;
