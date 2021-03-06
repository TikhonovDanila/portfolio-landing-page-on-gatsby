module.exports = {
  plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/src/img`,
          }
      },
  ],
}
