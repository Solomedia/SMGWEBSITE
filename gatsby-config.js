module.exports = {
	siteMetadata: {
		title: `Solo Media Group`,
		description: `Solo Media Group- We help brands make money and look good doing it.`,
		author: `Solo Media Group`
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-drift',
			options: {
				appId: '37ngukczydtx'
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-89457608-3',
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				head: false,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true,
				// Avoids sending pageview hits from custom paths
				exclude: ['/preview/**', '/do-not-track/me/too/'],
				sampleRate: 5,
				siteSpeedSampleRate: 10,
				cookieDomain: 'https://www.solomediagroup.co/'
			}
		},
		{
			resolve: `gatsby-plugin-google-tagmanager`,
			options: {
				id: 'GTM-TZBL9BZ',

				// Include GTM in development.
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: false
			}
		},
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				/*
				 * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
				 * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
				 */
				baseUrl: `wp.solomediagroup.co`,
				// The protocol. This can be http or https.
				protocol: `https`,
				// Indicates whether the site is hosted on wordpress.com.
				// If false, then the asumption is made that the site is self hosted.
				// If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
				// If your site is hosted on wordpress.org, then set this to false.
				hostingWPCOM: false,
				// If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
				// This feature is untested for sites hosted on WordPress.com
				useACF: true,
				// Search and Replace Urls across WordPress content.
				searchAndReplaceContentUrls: {
					sourceUrl: 'https://wp.solomediagroup.co',
					replacementUrl: 'https://d33g8nxzjr67v0.cloudfront.net'
				}
			}
		},
		{
			resolve: 'gatsby-plugin-zopfli'
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/solo-media-icon.png` // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-emotion`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// 'gatsby-plugin-offline',
	]
};
