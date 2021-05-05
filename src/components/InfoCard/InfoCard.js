import React from 'react';
import ReachStar from '../../images/InfoCard/climbingStar.svg';
import FireworksPicture from '../../images/InfoCard/fireworks.svg';
import ReachMountainTop from '../../images/InfoCard/climbingMountain.svg';
import * as classes from './InfoCard.module.css';

const InfoCard = ({ reachStar, reachMountainTop, fireworks, text }) => {
	const picture = reachStar ? ReachStar : reachMountainTop ? ReachMountainTop : fireworks ? FireworksPicture : null;
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
