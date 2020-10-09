module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: `Dan Makes Games`,
    description: `Portfolio for Dan Keohane.`,
    author: `@dkeohane`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FEF9C7`,
        theme_color: `#FEF9C7`,
        display: `minimal-ui`,
        icon: `src/images/icons/dan_site.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
