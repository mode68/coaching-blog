import React from 'react';
import Navigation from '../Navigation/Navigation';
import * as classes from './Layout.module.css';
import '@fontsource/mukta';

const layout = (props) => {
	return (
		<div className={classes.Layout}>
			<Navigation />
			<div className={classes.Content}>
				<div className={classes.PageName}>{props.pageName}</div>
				{props.children}
			</div>
		</div>
	);
};

export default layout;
