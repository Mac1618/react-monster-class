import React from 'react';
import useFetch from './useFetch';

const Form = () => {
	const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');
	return <div>{data && data.map((item) => <p key={item.id}>title: {item.title}</p>)}</div>;
};

export default Form;
