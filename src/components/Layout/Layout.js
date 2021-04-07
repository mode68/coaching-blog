import React from 'react';
import Navigation from '../UI/Navigation/Navigation';
import * as classes from './Layout.module.css';
import PageTransition from 'gatsby-plugin-page-transitions';
import '@fontsource/mukta';

const Layout = (props) => {
	return (
		<div className={classes.Layout}>
			<Navigation />
			<PageTransition
				transitionStyles={{
					entering: { opacity: '0' },
					entered: { opacity: '1' },
					exiting: { opacity: '0' },
				}}
			>
				<div className={classes.Content}>
					<div className={classes.PageName}>{props.pageName}</div>
					{props.children}
				</div>
			</PageTransition>
		</div>
	);
};

export default Layout;
