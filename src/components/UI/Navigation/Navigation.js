import React, { useState } from 'react';
import * as classes from './Navigation.module.css';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import TransitionLink from 'gatsby-plugin-transition-link';
import { useSpring, animated, useTransition } from 'react-spring';

const Navigation = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	// const mobileMenuProps = useSpring({
	// 	config: { duration: 100 },
	// 	height: showMobileMenu ? '250px' : '0',
	// 	display: showMobileMenu ? 'block' : 'none',
	// });
	const transition = useTransition(showMobileMenu, {
		// from: { transform: 'translate3d(0,-40px,0)' },
		// enter: { transform: 'translate3d(0,0px,0)' },
		// leave: { transform: 'translate3d(0px,-40px,0)' },
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { duration: 300 },
	});

	const socialMediaLinksElement = (
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
	);

	const menuLinksElement = (
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
	);

	const mobileMenuClickHandler = () => {
		setShowMobileMenu(!showMobileMenu);
	};

	return (
		<div className={classes.RootNavigation}>
			{transition((style, item) => {
				return item ? (
					<animated.div className={classes.MobileNavigation} style={style}>
						{menuLinksElement}
						{socialMediaLinksElement}
					</animated.div>
				) : null;
			})}
			{/* <div className={classes.MobileNavigation}>
				{menuLinksElement}
				{socialMediaLinksElement}
			</div> */}
			{showMobileMenu ? (
				<div className={classes.SideNavigationBackdrop} onClick={mobileMenuClickHandler} />
			) : null}
			<div className={classes.DesktopNavigation}>
				{socialMediaLinksElement}
				{menuLinksElement}
			</div>
			<div className={classes.SideNavigationButton}>
				<div className={classes.Title}>Coach Nano</div>
				<div className={classes.Button} onClick={mobileMenuClickHandler}>
					<FontAwesomeIcon icon={faBars} />
				</div>
			</div>
		</div>
	);
};

export default Navigation;
