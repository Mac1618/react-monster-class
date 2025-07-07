import { useState } from 'react';
import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import './styles.css';

// mock data
import data from "./mock-db/data";


const Ecommerce = () => {
	const [selectedCategory, setSelectedCategory] = useState(null);

	// filter query
	const [query, setQuery] = useState('');
	const handleInput = (e) => {
		setQuery(e.target.value);
	};	

	return (
		<>
			<Sidebar />
			<Navigation />
			<Recommended />
			<Products />
		</>
	);
};

export default Ecommerce;
