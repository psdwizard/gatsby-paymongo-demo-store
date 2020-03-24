import React from "react"
import { Link, graphql } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
import { faStar, faTag } from '@fortawesome/free-solid-svg-icons'

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <Header />
      <main className="product-details">
        <div className="container">
          <div className="section-product">
            <div className="product-wrapper">
              <div className="image-holder">
                <img className="product-image" src={frontmatter.image} alt={frontmatter.altText}/>
              </div>
              <div className="details-holder">
                <h1 className="name">{frontmatter.title}</h1>
                <h2 className="price">PHP{frontmatter.price}</h2>
                <div className="desc-holder">
                  <h2 className="label">Description</h2>
                  <p>{frontmatter.description}</p>
                </div>
                <div className="add-cart-holder">
                  <select className="quantity-select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <button to='/' className="btn-swipe-black hover-swipe-right">Add to Cart</button>
                </div>
                <div className="social-holder">
                  <Link to="/" className="icon-link twitter">
                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                    <span className="tooltip">Share on twitter</span>
                  </Link>
                  <Link to="/" className="icon-link facebook">
                    <FontAwesomeIcon icon={faFacebookF} className="icon" />
                  </Link>
                  <Link to="/" className="icon-link linkedin">
                    <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                  </Link>
                </div>
                {/* <div className="category-list">
                  <FontAwesomeIcon icon={faTag} className="tag-icon" />
                  Desk Lamps, Study Lamps, Bed Lamps
                </div> */}
              </div>
            </div>
            <Tabs className="tabs-wrapper">
              <TabList className="nav-tabs">
                <Tab className="nav-link">Additional Information</Tab>
              </TabList>
              <TabPanel className="tab-content">
                <ul className="info-list">
                  <li className="list-item">
                    <span>Weight</span>
                    {frontmatter.weight}
                  </li>
                  <li className="list-item">
                    <span>Dimensions</span>
                    {frontmatter.dimensions}
                  </li>
                  <li className="list-item">
                    <span>Materials</span>
                    {frontmatter.materials}
                  </li>
                  <li className="list-item">
                    <span>Other info</span>
                    {frontmatter.OtherInfo}
                  </li>
                </ul>
              </TabPanel>
            </Tabs>
          </div>
        </div>
     </main>
     <Footer />
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
        weight
        dimensions
        materials
        OtherInfo
      }
    }
  }
`