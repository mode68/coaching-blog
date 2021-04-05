import React from 'react';
import * as classes from './ReviewCard.module.css';
import malePicture from '../../images/male.png';
import femalePicture from '../../images/female.png';

const reviewCard = (props) => {
	const picture = props.gender === 'female' ? femalePicture : props.gender === 'male' ? malePicture : null;
	return (
		<div className={classes.ReviewCard}>
			<img className={classes.ReviewPicture} src={picture} alt='ReviewPicture' />
			<div className={classes.Review}>
				<div className={classes.ReviewTitle}>{props.title}</div>
				<div>{props.text}</div>
			</div>
		</div>
	);
};

export default reviewCard;
