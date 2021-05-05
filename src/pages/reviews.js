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
			<p style={{ marginBottom: '50px' }}>
				主に 20・30
				代の方中心にコーチングを実施しております。一部ですが、今までに頂いた感想・レビューコメントをご覧下さい。
			</p>
			{reviews}
		</Layout>
	);
};

export default reviews;
