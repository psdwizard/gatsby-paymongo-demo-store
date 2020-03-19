import React from "react"
import ImageObserver from '@researchgate/react-intersection-observer';

function prouctTemplate() {
  const { markdownRemark } = this.props.data
  const post = markdownRemark

  return (
    <div className="product-template">
      {post.frontmatter.productName}
      {post.frontmatter.description}
      {post.frontmatter.price}
      <ImageObserver src={post.frontmatter.image} altString={post.frontmatter.altText} />
    </div>
  )
}

export default prouctTemplate

export const pageQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html,
      frontmatter {
        productName
        description
        price
        image
        ratings
        altText
        ratings
      },
    },
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`