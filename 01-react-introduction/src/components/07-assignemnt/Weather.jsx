import React from 'react';

const Weather = ({ temperature }) => {
	const handleTemperature = () => {
		if (temperature <= 14) {
			return "It's cold outside!";
		} else if (temperature >= 15 && temperature <= 25) {
			return "It's nice outside!";
		} else {
			return "It's hot ouside!";
		}
	};

	return <div>{handleTemperature()}</div>;
};

export default Weather;
