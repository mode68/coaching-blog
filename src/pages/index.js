import * as React from 'react';
import Navigation from '../components/UI/Navigation/Navigation';
import image from '../images/home_page2.jpg';
import * as classes from '../pageStyles/index.module.css';
import { motion } from 'framer-motion';

// markup
const IndexPage = () => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
			}}
			transition={{
				type: 'spring',
				mass: 0.35,
				stiffness: 75,
				duration: 100,
			}}
		>
			<div className={classes.Home}>
				<div style={{ backgroundImage: `url(${image})` }}>
					<div>
						<div>
							<div className={classes.Title}>Nanako Hirano</div>
							<div className={classes.NavigationBar}>
								<Navigation removeStyling />
							</div>
							<div className={classes.Footer}>
								PHOTO BY{' '}
								<a href='https://unsplash.com/@narubono?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
									NARUBONO
								</a>{' '}
								ON{' '}
								<a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
									UNSPLASH
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default IndexPage;
