import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
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
			axios
				.get(
					`https://pixabay.com/api/?key=${process.env
						.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true&category=${category}`
				)
				.then((response) => setValues({ ...values, images: response.data.hits, isLoading: false }))
				.catch((err) => console.warn(err));
		},
		[ term, category ]
	);

	return (
		<Fragment>
			<div className="antialiased bg-gray-100 p-8 font-default min-h-screen">
				<div className="container mx-auto">
					<ImageSearch
						searchText={(text) => setValues({ ...values, term: text })}
						searchCategory={(text) => setValues({ ...values, category: text, isLoading: true })}
					/>

					{!isLoading &&
					images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">No Images Found</h1>}

					{isLoading ? (
						<h1 className="text-6xl text-center mx-auto mt-32">Loading ...</h1>
					) : (
						<div className="grid px-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
							{images.map((image, index) => <ImageCard key={image.id} index={index} image={image} />)}
						</div>
					)}
				</div>
			</div>
			<div className="py-6 bg-gray-300 text-gray-700 text-center">
				Created with <span className="text-teal-600"><i className="fas fa-heart text-teal-600" /></span> & <span className="text-teal-600"><i class="fas fa-mug-hot" /></span> by{' '}
				<a href="https://github.com/ImraanMeyer/" target="blank" className="hover:text-teal-600">Imraan</a>
			</div>
		</Fragment>
	);
};

export default App;
