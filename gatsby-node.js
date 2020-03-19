const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const productTemplate = path.resolve(`src/templates/productTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      },
      product: allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 1000
        filter: { fileAbsolutePath: {regex : "\/product/"} },
      ) {
        edges {
          node {
            html
            frontmatter {
              productName
              description
              price
              image
              ratings
              altText
              ratings
            }
          }
        }
      },
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })

    result.data.product.edges.forEach(({ node }) => {
      createPage({
        path: `/product${node.frontmatter.path}`,
        component: productTemplate,
        context: {
          pathSlug: node.frontmatter.path,
        },
      })
    })
  })
}