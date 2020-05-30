import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

const App = () => {
	const [ values, setValues ] = useState({
		images: [],
		isLoading: true,
		term: '',
		category: ''
	});

	const { images, isLoading, term, category } = values;

	useEffect(
		() => {
			Axios.get(
				`https://pixabay.com/api/?key=${process.env
					.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true&category=${category}`
			)
				.then((response) => setValues({ ...values, images: response.data.hits, isLoading: false }))
				.catch((err) => console.warn(err));
		},
		[ term, category ]
	);

	console.log(values);

	return (
		<div className="antialiased bg-gray-300 font-poppins">
			<div className="container mx-auto">
				<ImageSearch 
					searchText={(text) => setValues({ ...values, term: text })} 
					searchCategory={(text) => setValues({ ...values, category: text })}  
				/>

				{!isLoading &&
				images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">No Images Found</h1>}

				{isLoading ? (
					<h1 className="text-6xl text-center mx-auto mt-32">Loading ...</h1>
				) : (
					// <div className="grid px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
					<div className="flex-wrap flex justify-start items-center">
						{images.map((image) => <ImageCard key={image.id} image={image} />)}
					</div>
				)}
			</div>
		</div>
	);
};

export default App;
