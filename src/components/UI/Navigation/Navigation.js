import React from 'react';
import * as classes from './Navigation.module.css';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const navigation = () => {
	return (
		<div
		// style={{
		// 	width: '100%',
		// 	height: '100%',
		// }}
		>
			<div className={classes.SocialMediaLinks}>
				<a href='https://www.youtube.com'>
					<FontAwesomeIcon icon={faYoutube} />
				</a>
				<a href='https://www.twitter.com'>
					<FontAwesomeIcon icon={faTwitterSquare} />
				</a>
				<a href='https://www.facebook.com'>
					<FontAwesomeIcon icon={faFacebook} />
				</a>
				<a href='https://www.instagram.com'>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</div>
			<div className={classes.Navigation}>
				<div className={classes.Link}>
					<Link activeClassName={classes.active} to='/about'>
						ABOUT
					</Link>
				</div>
				<div className={classes.Link}>
					<Link activeClassName={classes.active} to='/whatIsLifeCoaching'>
						WHAT IS LIFE COACHING?
					</Link>
				</div>
				<div className={classes.Link}>
					<Link activeClassName={classes.active} to='/reviews'>
						REVIEWS
					</Link>
				</div>
				<div className={classes.Link}>
					<Link activeClassName={classes.active} to='/contact'>
						CONTACT
					</Link>
				</div>
			</div>
		</div>
	);
};

export default navigation;
