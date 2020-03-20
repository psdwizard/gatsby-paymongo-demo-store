const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const productTemplate = path.resolve(`src/templates/productTemplate.js`)

  const templates = {
    productList: path.resolve('src/templates/product-list.js')
  }

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { fileAbsolutePath: {regex : "\/product/"} },
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    
    const product = res.data.allMarkdownRemark.edges

    product.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: productTemplate,
        context: {}, // additional data can be passed via context
      })
    })

    const productsPerPage = 2 
    const numberOfPages = Math.ceil(product.length / productsPerPage)
    Array.from({ length: numberOfPages }).forEach((_, index) => {
      const isFirstPage = index === 0
      const currentPage = index + 1

      if(isFirstPage) return

      createPage({
        path: 'product-catalog/page/$(currentPage)',
        component: templates.productList,
        context: {
          limit: productsPerPage,
          skip: index * productsPerPage,
          currentPage,
          numberOfPages
        }
      })
    })
  })
}