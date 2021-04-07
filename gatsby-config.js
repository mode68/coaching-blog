module.exports = {
	siteMetadata: {
		title: 'coaching-blog',
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-page-transitions',
			options: {
				transitionTime: 500,
			},
		},
		`gatsby-plugin-transition-link`,
		'gatsby-plugin-image',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: '267243928',
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
	],
};
