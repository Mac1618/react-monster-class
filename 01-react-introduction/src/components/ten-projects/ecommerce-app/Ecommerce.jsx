import { useState } from 'react';
import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import './styles.css';

// mock database
import Card from './components/Card';
import { data as products } from "./mock-db/data";

const Ecommerce = () => {
	// for Ecommerce store (redux / zustand)
	const [selectedCategory, setSelectedCategory] = useState(null);

	// filter query
	const [query, setQuery] = useState('');
	const handleInputChange = (e) => {
		setQuery(e.target.value);
	};	

	// filter by titles
	const filterByTitles = products.filter(product => 	// filter products title
			product.title.toLocaleLowerCase("en-USr4")		// convert to lower case
				.includes(query.toLocaleLowerCase("en-US")));		// check if included

	// filter by category
	const handleFilterCategory = (e) => setSelectedCategory(e.target.value);

	// filter by product tabs
	const handleProductTabs = (e) => setSelectedCategory(e.target.value);

	const filterProductsData = (products, selected, query) => {
		let filteredProducts = products;

		// Filter input items
		if(query) {
			filteredProducts =  filterByTitles
		}

		if(selected) {
			filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => 
				category === selected || 
				color === selected || 
				company === selected || 
				newPrice === selected || 
				title === selected
		);

		return filteredProducts
			.map(({img, title, star, review, newPrice, prevPrice}) => (
				<Card 
					key={Math.random()}
					img={img}
					title={title}
					star={star}
					review={review}
					newPrice={newPrice}
					prevPrioce={prevPrice}
				/>
			))
		}
	}

	const result = filterProductsData(products, selectedCategory, query);

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
