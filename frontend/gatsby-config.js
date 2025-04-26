/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Strapi Gatsby Blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: ["post", "category", "author"], // Add your collection types here
        singleTypes: [], // Add your single types here if any
        queryLimit: 1000, // Defaults to 100
      },
    },
    `gatsby-transformer-remark`,
  ],
};
