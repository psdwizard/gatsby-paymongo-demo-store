import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/Header"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <Header />
      <main className="product-detials">
        <div className="container">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.description}</h2>
        </div>
     </main>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        price
        image
        altText
        ratings
      }
    }
  }
`