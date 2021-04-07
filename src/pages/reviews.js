import React from 'react';
import Layout from '../components/Layout/Layout';
import ReviewCard from '../components/ReviewCard/ReviewCard';
import reviewData from '../reviews/reviews.json';

const reviews = () => {
	let reviews = Object.keys(reviewData).map((key) => {
		return (
			<ReviewCard
				key={key}
				gender={reviewData[key].gender}
				title={reviewData[key].reviewTitle}
				text={reviewData[key].reviewText}
			/>
		);
	});

	return (
		<Layout pageName='REVIEWS'>
			<p>
				Do you have any doubts whether this service is for you? Please go ahead and read these reviews to help
				you decide.
			</p>
			{reviews}
		</Layout>
	);
};

export default reviews;
