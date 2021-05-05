import * as React from 'react';
import Navigation from '../components/UI/Navigation/Navigation';
import image from '../images/home_page2.jpg';
import * as classes from '../pageStyles/index.module.css';
import PageTransition from 'gatsby-plugin-page-transitions';

// markup
const IndexPage = () => {
	return (
		<PageTransition
			transitionStyles={{
				entering: { opacity: '0' },
				entered: { opacity: '1' },
				exiting: { opacity: '1' },
				exited: { opacity: '0' },
			}}
			transitionTime={1000}
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
		</PageTransition>
	);
};

export default IndexPage;
