module.exports = {
  pathPrefix: "/gatsby-paymongo-demo-store/",
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require('autoprefixer')()]
      }
    }
  ],  
}