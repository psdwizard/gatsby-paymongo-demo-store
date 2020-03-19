import React, { useState, useEffect } from 'react'
import { Link, graphql } from "gatsby"

import Header from "../components/Header"

function ProductCatalog({data}) {
  return (
    <div>
      <Header />
      <main className="product-catalog">
        <div className="container">
          <ul className="product-listing">
            {console.log(data)}

            { 
              data.allMarkdownRemark.edges.map(post => {
                const { title, description, price, image, altText, path, ratings } = post.node.frontmatter;

                return (
                  <div className="product-item">
                    <h2 className="title">{title}</h2>
                    <p className="description">{description}</p>
                    <Link to={path} className="btn btn-black">View Details</Link>
                  </div>
                )
              })
            }
          </ul>
        </div>
      </main>
    </div>
  )
}

export default ProductCatalog

export const ProductQuery = graphql`
  query AllProduct {
    allMarkdownRemark {
      edges {
        node {
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
    }
  }
`