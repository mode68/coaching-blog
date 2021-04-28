import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Navigation from '../UI/Navigation/Navigation';
import * as classes from './Layout.module.css';
import PageTransition from 'gatsby-plugin-page-transitions';
import favicon from '../../images/favicon.ico';
import '@fontsource/mukta';

const Layout = (props) => {
	return (
		<div>
			<Helmet>
				<link rel='icon' href={favicon} />
			</Helmet>
			<StaticQuery
				query={graphql`
					query SiteTitleQuery {
						site {
							siteMetadata {
								title
							}
						}
					}
				`}
				render={(data) => (
					<>
						<Helmet title={data.site.siteMetadata.title} />
						<div className={classes.Layout}>
							<Navigation />
							<main>
								<PageTransition
									transitionStyles={{
										entering: { opacity: '0' },
										entered: { opacity: '1' },
										exiting: { opacity: '1' },
										exited: { opacity: '0' },
									}}
									transitionTime={1000}
								>
									<div className={classes.Content}>
										<div className={classes.PageName}>{props.pageName}</div>
										{props.children}
									</div>
								</PageTransition>
							</main>
						</div>
					</>
				)}
			/>
		</div>
	);
};

export default Layout;
