import React, { useState } from 'react'
import { Link, graphql } from "gatsby"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faList } from '@fortawesome/free-solid-svg-icons'
import {Helmet} from "react-helmet"


function ProductCatalog({ data }) {
  const [activeTab, setActiveTab] = useState('1');



  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Helmet>
        <title>Fullstack HQ | Products</title>
        <meta name="description" content="" />
      </Helmet>
      <Header />
      <main className="products">
        <Banner content={{ title: 'All Products' }} />
        <div className="section-catalog">
          <div className="container">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => { toggle('1'); }}
                >
                   <FontAwesomeIcon icon={faTh} className="icon icon-grid" />
              </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => { toggle('2'); }}
                >
                   <FontAwesomeIcon icon={faList} className="icon icon-list" />
              </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div className="grid">
                  <ul className="product-listing">
                    {
                      data.allMarkdownRemark.edges.map(product => {
                        const { title, price, image300, altText, path } = product.node.frontmatter;

                        return (
                          <div className="product-item" key={title}>
                            <div className="image-holder">
                              <Link to={path}>
                                <div className="thumbnail">
                                  <img src={image300} className="image-thumbnail" alt={altText} />
                                </div>
                                <Link to={path} className="btn-swipe-black hover-swipe-right">View Details</Link>
                              </Link>
                            </div>
                            <div className="text-holder">
                              <h2 className="title">{title}</h2>
                              <p className="price">PHP {price}</p>
                            </div>
                          </div>
                        )
                      })
                    }
                  </ul>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="list">
                  <ul className="product-listing">
                    {
                      data.allMarkdownRemark.edges.map(product => {
                        const { title, description, price, image150, altText, path } = product.node.frontmatter;
  
                        let dotsDescription = description.length > 210 ? '...' : '';
                        let excerptedDescription = description.slice(0, 210) + dotsDescription;

                        return (
                          <div className="product-item" key={title}>
                            <div className="image-holder">
                              <Link to={path}>
                                <div className="thumbnail">
                                  <img src={image150} className="image-thumbnail" alt={altText} />
                                </div>
                              </Link>
                            </div>
                            <div className="text-holder">
                              <h2 className="title">{title}</h2>
                              <p className="description">{excerptedDescription}</p>
                              <p className="price">PHP {price}</p>
                              <Link to={path} className="btn-swipe-black hover-swipe-right">View Details</Link>
                            </div>
                          </div>
                        )
                      })
                    }
                  </ul>
                </div>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProductCatalog

export const ProductQuery = graphql`
  query AllProduct {
    allMarkdownRemark (
      sort: {fields: [frontmatter___date], order: DESC}
    ){
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
            price
            image150
            image300
            altText
            weight
            dimensions
            materials
            OtherInfo
          }
        }
      }
    }
  }
`