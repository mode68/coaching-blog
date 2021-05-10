import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Navigation from '../UI/Navigation/Navigation';
import * as classes from './Layout.module.css';
import favicon from '../../images/favicon.ico';
import { motion } from 'framer-motion';

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
								<motion.div
									initial={{
										opacity: 0,
										x: -200,
									}}
									animate={{
										opacity: 1,
										x: 0,
									}}
									exit={{
										opacity: 0,
										x: 200,
									}}
									transition={{
										type: 'spring',
										mass: 0.35,
										stiffness: 75,
										duration: 0.3,
									}}
								>
									<div className={classes.Content}>
										<div className={classes.PageName}>{props.pageName}</div>
										{props.children}
									</div>
									<footer>
										<div>
											Icons made by <a href='https://www.flaticon.com/authors/turkkub'>turkkub</a>{' '}
											and <a href='https://www.flaticon.com/authors/iconixar'>iconixar</a> from{' '}
											<a href='https://www.flaticon.com'>www.flaticon.com</a>
										</div>
									</footer>
								</motion.div>
							</main>
						</div>
					</>
				)}
			/>
		</div>
	);
};

export default Layout;
