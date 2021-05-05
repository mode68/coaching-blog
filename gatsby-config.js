module.exports = {
	siteMetadata: {
		title: 'CoacHirano',
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-page-transitions',
			options: {
				transitionTime: 500,
			},
		},
		{
			resolve: `gatsby-plugin-transition-link`,
		},
		'gatsby-plugin-image',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: '267243928',
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Noto Serif JP\:200,300,400,500,600,700`,
					`Mukta\:200,300,400,500,600,700`,
					`Kaushan Script\:200,300,400,500,600,700`,
				],
				display: 'swap',
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
