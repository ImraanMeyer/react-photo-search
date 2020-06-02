import React, { useState } from 'react';

const ImageSearch = ({ searchArguments}) => {
	const [ text, setText ] = useState('');
	const [ cat, setCat ] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
        searchArguments(text, cat)
	};

	const categories = [
		'backgrounds',
		'fashion',
		'nature',
		'science',
		'education',
		'feelings',
		'health',
		'people',
		'religion',
		'places',
		'animals',
		'industry',
		'computer',
		'food',
		'sports',
		'transportation',
		'travel',
		'buildings',
		'business',
		'music'
    ];

	return (
		<div className="max-w-lg px-2 rounded overflow-hidden mb-10 mx-auto">
			<form className="max-w-l" onSubmit={onSubmit}>
				<div className="flex items-center border-b border-b-2 border-teal-500 py-2">
					<input
						type="text"
						placeholder="Search Images..."
						className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
						onChange={(e) => setText(e.currentTarget.value)}
					/>

					<button
						className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded focus:outline-none mr-1"
						type="submit"
					>
						Search
					</button>
				</div>

				<div className="flex flex-wrap justify-center mt-2">
					{categories.map((category, index) => (
						<button
							key={index}
                            className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 m-1 focus:outline-none flex-1 hover:bg-gray-400 hover:border-teal-400 transition-all duration-150  focus:bg-teal-500 focus:text-white"
                            
                            onClick={e => setCat(e.currentTarget.innerHTML)}
						>
							{category}
						</button>
					))}
				</div>
			</form>
		</div>
	);
};

export default ImageSearch;
