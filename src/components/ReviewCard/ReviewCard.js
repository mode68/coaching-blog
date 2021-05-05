import React from 'react';
import * as classes from './ReviewCard.module.css';

function importAll(r) {
	let images = {};
	r.keys().forEach((item) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max + 1);
}

const ReviewCard = (props) => {
	const images = importAll(require.context('../../images/ReviewCard/svg', false, /\.(png|jpe?g|svg)$/));
	const randomImgNr = getRandomInt(Object.keys(images).length / 2);

	return (
		<div className={classes.ReviewCard}>
			<img
				className={[classes.ReviewPicture, classes.DesktopOnly].join(' ')}
				src={images[`${randomImgNr}-${props.gender}.svg`].default}
				alt='Review Person'
			/>
			<div className={classes.MobileOnly}>
				<img
					className={classes.ReviewPicture}
					src={images[`${randomImgNr}-${props.gender}.svg`].default}
					alt='Review Person'
				/>
				<div className={classes.ReviewTitle}>{props.title}</div>
			</div>
			<div className={classes.Review}>
				<div className={[classes.ReviewTitle, classes.DesktopOnly].join(' ')}>{props.title}</div>
				<div dangerouslySetInnerHTML={{ __html: props.text }}></div>
			</div>
		</div>
	);
};

export default React.memo(ReviewCard);
