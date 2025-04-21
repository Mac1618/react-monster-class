import React, { useState } from 'react';
import './styles.css';

const Testimonial = () => {
	// variables
	const [currentIndex, setCurrentIndex] = useState(0);
	const testimonials = [
		{
			quote: "This is the best product I've ever used!",
			author: 'Jane Doe',
		},
		{
			quote: 'I highly recommend this product to everyone!',
			author: 'John Smith',
		},
		{
			quote: 'This product has completely changed my life!',
			author: 'Bob Johnson',
		},
	];

	// buttons
	const prevBtnHandler = () => {
		setCurrentIndex((currentIndex + 1) % testimonials.length);
	};
	const nextBtnHandler = () => {
		setCurrentIndex((currentIndex + 1) % testimonials.length);
	};

	return (
		<div className="testimonials">
			<div className="testimonials-quote">{testimonials[currentIndex].quote}</div>
			<div className="testimonials-author">{testimonials[currentIndex].author}</div>
			<div className="testimonials-nav">
				<button style={{ position: 'static' }} onClick={prevBtnHandler}>
					Prev
				</button>
				<button style={{ position: 'static' }} onClick={nextBtnHandler}>
					Next
				</button>
			</div>
		</div>
	);
};

export default Testimonial;
