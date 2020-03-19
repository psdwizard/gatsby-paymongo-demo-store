import React from "react"
import { Link, graphql } from "gatsby"

export default function productTemplate ({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter } = markdownRemark

  return (
    <div className="product-template">
      {frontmatter.productName}
      {frontmatter.description}
      {frontmatter.price}
      {/* <ImageObserver src={post.frontmatter.image} altString={post.frontmatter.altText} /> */}
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html,
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
`