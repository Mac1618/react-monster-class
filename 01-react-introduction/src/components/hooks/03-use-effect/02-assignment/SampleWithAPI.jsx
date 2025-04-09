import React, { useEffect, useState } from 'react';

const SampleWithAPI = () => {
	const [datas, setDatas] = useState([]);

	useEffect(() => {
		try {
			async function getItems() {
				const response = await fetch('https://jsonplaceholder.typicode.com/todos');
				const items = await response.json();
				setDatas(items);
			}

			getItems();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<section>
      <h2>useEffect with API</h2>
			{datas.map((data) => (
				<h4 key={data.id}>{data.title}</h4>
			))}
			
		</section>
	);
};

export default SampleWithAPI;
