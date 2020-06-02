import React from 'react';

import './ImageCard.css';

const ImageCard = ({ image, index }) => {
	const { downloads, views, likes, webformatURL, tags, user, userImageURL } = image;

	const icons = {
		views: [views, 'far fa-eye'],
		downloads: [downloads, 'fas fa-download'],
		likes: [likes, 'fas fa-thumbs-up']
	};

	console.log(index)

	return (
		<div className={`h-full relative rounded-lg overflow-hidden relative shadow-lg hover:shadow-2xl transion-all duration-200 card`}>
			<img src={webformatURL} alt={tags} className="h-full w-full card-image object-cover"  />

			<div className="absolute px-6 p-4  bottom-0 w-full h-full bg-gray-400 opacity-0 hover:opacity-75 transition-all duration-200">
				<div className="grid grid-cols-1 grid-rows-3 h-full">
					<div className="flex items-center flex-col  font-bold text-xl mb-2 flex items-center">
						{userImageURL === '' ? (
							<span className="border-solid border-2 border-teal-500 rounded-full h-8 w-8 flex items-center justify-center">
								{user[0].toUpperCase()}
							</span>
						) : (
							<img
								src={userImageURL}
								alt={user}
								className="rounded-full h-8 w-8 flex items-center justify-center"
							/>
						)}
						<h5  className='mt-2 text-gray-800'>
							Photo by <strong className="text-teal-600">{user}</strong>
						</h5>
					</div>
					<ul className="grid grid-cols-3 w-full px-2">
					{Object.values(icons).map(icon => (				
							<li className="text-teal-600 flex flex-col items-center justify-center">
								<i className={icon[1]} />
								<p className="text-gray-800">{icon[0]}</p>
							</li>
						))}
					</ul>
					<div className="flex flex-wrap flex-auto h-10 items-center justify-center">
						{tags.split(',').map((tag, index) => (
							<span
								key={index}
								className="m-1 inline-block bg-indigo-400 rounded-full px-3 py-1 text-sm font-semibold text-white"
							>
								#{tag}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageCard;
