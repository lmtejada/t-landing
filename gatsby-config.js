module.exports = {
  siteMetadata: {
    title: `Tisa`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        name: `Tisa Landing`,
        short_name: `Tisa`,
        start_url: `/`,
        background_color: `#049098`,
        theme_color: `#f3f1f1`,
        display: `standalone`,
        icon: `src/images/tisafav.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
