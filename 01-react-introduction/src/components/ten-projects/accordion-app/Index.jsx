import React from 'react';
import Accordion from './Accordion';
import './styles.css';
import { accordionData } from './libs/content';

const MainProjectEight = () => {
	return (
		<div>
			<div className="accordion">
				{accordionData.map(({ title, content }) => (
					<Accordion title={title} content={content} key={Math.random()} />
				))}
			</div>
		</div>
	);
};

export default MainProjectEight;
