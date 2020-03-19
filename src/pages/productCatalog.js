import React from "react"

function prouctTemplate() {
  return (
    <div className="product-catalog">

    </div>
  )
}


// export const pageQuery = graphql`
// query rateOptimizationIndexQuery {
//   rateoptimization: allMarkdownRemark(
//     sort: { order: DESC, fields: [frontmatter___date] }
//     limit: 1000
//     filter: { fileAbsolutePath: {regex : "\/rateoptimization/"} },
//   ) {
//       html,
//       frontmatter {
//         // name
//         description
//         price
//         image
//         ratings
//         altText
//         ratings
//       },
//     },
//     site {
//       siteMetadata {
//         siteUrl
//       }
//     }
//   }
// `