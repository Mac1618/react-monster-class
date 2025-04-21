import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles.css';

const Meals = () => {
	const [mealItems, setMealItems] = useState([]);

	useEffect(() => {
		axios
			.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
			.then((res) => {
				console.log(res.data.meals);
				setMealItems(res.data.meals);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const mealsCard = mealItems.map(({ strMeal, strMealThumb, idMeal }) => (
		<section className="card">
			<img src={strMealThumb} alt="Meals Images" />
			<div className="content">
				<p>{strMeal}</p>
				<p>#{idMeal}</p>
			</div>
		</section>
	));

	return <div className="items-container">{mealsCard}</div>;
};

export default Meals;
