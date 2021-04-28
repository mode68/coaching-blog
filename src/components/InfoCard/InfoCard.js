import React from 'react';
import HeartGlassPicture from '../../images/InfoCard/magnifying_glass_heart.jpg';
import PeacePicture from '../../images/InfoCard/peace.jpg';
import MedalPicture from '../../images/InfoCard/medal.jpg';
import * as classes from './InfoCard.module.css';

const InfoCard = ({ heartGlass, medal, peace, text }) => {
	const picture = heartGlass ? HeartGlassPicture : medal ? MedalPicture : peace ? PeacePicture : null;
	return (
		<div className={classes.InfoCard}>
			<div>
				<img alt='Info Card' className={classes.Image} src={picture} />
				<div className={classes.Text}>{text}</div>
			</div>
		</div>
	);
};

export default InfoCard;
