import React from 'react';

const ImageCard = ({ image }) => {
	const { downloads, views, likes, webformatURL, tags, user } = image;

	return (
		<div className="max-w-sm flex-none h-full m-4 rounded-lg overflow-hidden shadow-lg transition-all bg-grey-100 duration-200 hover:shadow-2xl transition-all-200">
			<img src={webformatURL} alt="" className="w-full" />

			<div className="px-6 py-4">
				<div className="font-bold text-indigo-600 text-xl mb-2">Photo by <strong className="font-bold">{user}</strong></div>
				<ul>
					<li>
						<strong>Views: </strong>
						{views}
					</li>
					<li>
						<strong>Downloads: </strong>
						{downloads}
					</li>
					<li>
						<strong>Likes: </strong>
						{likes}
					</li>
				</ul>
			</div>
			<div className="px-6 py-4">
				{tags.split(',').map((tag, index) => (
					<span
						key={index}
						className="inline-block bg-indigo-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
					>
						#{tag}
					</span>
				))}
			</div>
		</div>
	);
};

export default ImageCard;
