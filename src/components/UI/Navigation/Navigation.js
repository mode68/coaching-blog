import React, { useState } from 'react';
import * as classes from './Navigation.module.css';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLine, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faStickyNote } from '@fortawesome/free-regular-svg-icons';
import { animated, useTransition } from 'react-spring';

const Navigation = ({ removeStyling }) => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const transition = useTransition(showMobileMenu, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { duration: 300 },
	});

	const socialMediaLinksElement = (
		<div className={classes.SocialMediaLinks}>
			<a href='https://note.com/nanatravel_7'>
				<FontAwesomeIcon style={{ transform: 'rotate(180deg)' }} icon={faStickyNote} />
			</a>
			<a href='https://twitter.com/Nanacoooo775'>
				<FontAwesomeIcon icon={faTwitterSquare} />
			</a>
			<a href='https://www.facebook.com/nanako.hirano.16'>
				<FontAwesomeIcon icon={faFacebook} />
			</a>
			<a href='https://lin.ee/m7DdXR9'>
				<FontAwesomeIcon icon={faLine} />
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

	return removeStyling ? (
		<div>
			{menuLinksElement}
			{socialMediaLinksElement}
		</div>
	) : (
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
				<div className={classes.Title}>Nanakoach</div>
				<div className={classes.Button} onClick={mobileMenuClickHandler}>
					<FontAwesomeIcon icon={faBars} />
				</div>
			</div>
		</div>
	);
};

export default Navigation;
