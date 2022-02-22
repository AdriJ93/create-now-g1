module.exports = {
  siteMetadata: {
    title: `Create Now`,
    description: `Unkompliziert und schnell Videoschnitt Projekte umsetzen!`,
    author: `@create-now`,
    siteUrl: `https://www.create-now.net`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `Create Now`,
        short_name: `Create Now`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Bowle.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`],
        display: "swap",
      },
    },
    `gatsby-plugin-fontawesome-css`,
  ],
}
