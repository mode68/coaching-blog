import React, { useState } from 'react';
import * as classes from './Navigation.module.css';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { animated, useTransition } from 'react-spring';

const Navigation = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const transition = useTransition(showMobileMenu, {
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
				<Link activeClassName={classes.active} to='/myService'>
					MY SERVICE
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
			{transition((style, show) => {
				return (
					show && (
						<animated.div className={classes.MobileNavigation} style={style}>
							{menuLinksElement}
							{socialMediaLinksElement}
						</animated.div>
					)
				);
			})}

			{showMobileMenu && <div className={classes.SideNavigationBackdrop} onClick={mobileMenuClickHandler} />}
			<div className={classes.DesktopNavigation}>
				{socialMediaLinksElement}
				{menuLinksElement}
			</div>
			<div className={classes.SideNavigationButton}>
				<div className={classes.Title}>CoacHirano</div>
				<div className={classes.Button} onClick={mobileMenuClickHandler}>
					<FontAwesomeIcon icon={faBars} />
				</div>
			</div>
		</div>
	);
};

export default Navigation;
