import React from 'react';
import Layout from '../components/Layout/Layout';
import ReviewCard from '../components/ReviewCard/ReviewCard';
import reviewData from '../reviews/reviews.json';
import { IntersectionObserver } from '../components/UI/IntersectionObserver/IntersectionObserver';
import { AnimationContainer } from '../components/UI/Animation/AnimationContainer';

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
			<IntersectionObserver triggerOnce threshold={0.1}>
				<AnimationContainer scale staggerChildren={0.5}>
					{reviews}
				</AnimationContainer>
			</IntersectionObserver>
		</Layout>
	);
};

export default reviews;
