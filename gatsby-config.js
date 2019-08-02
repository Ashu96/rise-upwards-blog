module.exports = {
  siteMetadata: {
    title: `Rise upwards`,
    description: `Making marketing website using gatsby and strapi`,
    author: `@gatsbyjs & @strapi`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? 'https://rise-upwards.herokuapp.com'
          : 'http://localhost:1337',
        contentTypes: [
          `article`,
          `user`,
          `herosection`,
          `feature`,
          `step`,
          `pride`
        ],
        queryLimit: 1000
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rise upwards`,
        short_name: `rise`,
        start_url: `/`,
        background_color: `#7668ff`,
        theme_color: `#7668ff`,
        display: `standalone`,
        icon: `src/images/upriselogo.svg` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline'
  ]
}
