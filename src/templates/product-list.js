import React, { useState, useEffect } from 'react'
import { Link, graphql } from "gatsby"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faList } from '@fortawesome/free-solid-svg-icons'


function productList({ data }) {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Header />
      <main className="product-catalog">
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
                        const { title, description, price, image, altText, path, ratings } = product.node.frontmatter;

                        return (
                          <div className="product-item" key={title}>
                            <div className="image-holder">
                              <div className="thumbnail">
                                <img src={image} className="image-thumbnail" alt={altText} />
                              </div>
                              <Link to={path} className="custom-btn custom-btn-black">View Details</Link>
                            </div>
                            <div className="text-holder">
                              <h2 className="title">{title}</h2>
                              <p className="price">${price}</p>
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
                        const { title, description, price, image, altText, path, ratings } = product.node.frontmatter;

                        return (
                          <div className="product-item" key={title}>
                            <div className="image-holder">
                              <div className="thumbnail">
                                <img src={image} className="image-thumbnail" alt={altText} />
                              </div>
                            </div>
                            <div className="text-holder">
                              <h2 className="title">{title}</h2>
                              <p className="description">{description}</p>
                              <p className="price">${price}</p>
                              <Link to={path} className="custom-btn custom-btn-black">View Details</Link>
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

export default productList

export const ProductQuery = graphql`
  query productsQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark (
      sort: {fields: [frontmatter___date], order: DESC}
      limit: $limit
      skip: $skip 
    ){
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