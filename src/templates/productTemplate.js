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
                <Tab className="nav-link">Reviews</Tab>
                <Tab className="nav-link">Additional Information</Tab>
              </TabList>
              <TabPanel className="tab-content">
                <div className="review-summary">
                  <div className="overall-star">
                    <p>5/5</p>
                    <span className="stars">
                      <FontAwesomeIcon icon={faStar} className="icon" />
                      <FontAwesomeIcon icon={faStar} className="icon" />
                      <FontAwesomeIcon icon={faStar} className="icon" />
                      <FontAwesomeIcon icon={faStar} className="icon" />
                      <FontAwesomeIcon icon={faStar} className="icon" />
                    </span>
                    <p className="ratings">2 Ratings</p>
                  </div>
                  <div className="progress-star">
                    <div className="progress">
                      <span className="stars">
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                      </span>
                      <div className="progress-bar-complete"></div>
                    </div>
                    <div className="progress">
                      <span className="stars four-star">
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                      </span>
                      <div className="progress-bar-zero"></div>
                    </div>
                    <div className="progress">
                      <span className="stars three-star">
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                      </span>
                      <div className="progress-bar-zero"></div>
                    </div>
                    <div className="progress">
                      <span className="stars two-star">
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                      </span>
                      <div className="progress-bar-zero"></div>
                    </div>
                    <div className="progress">
                      <span className="stars one-star">
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                      </span>
                      <div className="progress-bar-zero"></div>
                    </div>
                  </div>
                </div>
                <h2 className="title-content">Product Reviews</h2>
                <div className="review-wrapper">
                  <div className="review-holder">
                    <div className="avatar">
                      <div className="image-holder">
                        <span>YP</span>
                      </div>
                    </div>
                    <div className="review-data">
                      <p className="customer-name">Yes Papa</p>
                      <span className="stars">
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                      </span>
                      <p className="date-posted">12/25/2020</p>
                      <div className="review-title">This product is awesome!</div>
                      <div className="review-products">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id rhoncus ligula. Sed vehicula, leo non egestas efficitur, odio dolor porttitor lorem, ut eleifend justo mauris sit amet nibh. Phasellus at feugiat ex, ut aliquet nunc. Phasellus consequat orci at molestie congue. In hac habitasse platea dictumst. Nunc lacus ligula, accumsan vel eleifend vitae, ullamcorper in est. Pellentesque quis arcu vehicula, tempus nisi ut, accumsan diam. Curabitur porttitor aliquam vulputate. Duis auctor tempor ex, quis interdum risus finibus eu. Fusce ut est vel est ultrices ullamcorper. Mauris sed quam nisl.
                      </div>
                    </div>
                  </div>
                  <div className="review-holder">
                    <div className="avatar">
                      <div className="image-holder">
                        <span>CC</span>
                      </div>
                    </div>
                    <div className="review-data">
                      <p className="customer-name">Charlie Charlie</p>
                      <span className="stars">
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <FontAwesomeIcon icon={faStar} className="icon" />
                      </span>
                      <p className="date-posted">12/25/2020</p>
                      <div className="review-title">This product is awesome!</div>
                      <div className="review-products">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id rhoncus ligula. Sed vehicula, leo non egestas efficitur, odio dolor porttitor lorem, ut eleifend justo mauris sit amet nibh. Phasellus at feugiat ex, ut aliquet nunc. Phasellus consequat orci at molestie congue. In hac habitasse platea dictumst. Nunc lacus ligula, accumsan vel eleifend vitae, ullamcorper in est. Pellentesque quis arcu vehicula, tempus nisi ut, accumsan diam. Curabitur porttitor aliquam vulputate. Duis auctor tempor ex, quis interdum risus finibus eu. Fusce ut est vel est ultrices ullamcorper. Mauris sed quam nisl.
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="title-content">Write a Review</h2>
                <div className="write-wrapper">
                  <textarea className="message-box"></textarea>
                  <button className="btn-swipe-yellow hover-swipe-right" type="submit">Submit</button>
                </div>
              </TabPanel>
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
          <div className="section-related-products">
            <h2 className="title">Related Products</h2>
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
        ratings
      }
    }
  }
`