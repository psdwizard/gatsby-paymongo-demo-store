import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faList, faAngleDoubleLeft, faArrowAltCircleLeft, faArrowAltCircleRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import Pagination from "react-js-pagination"


function ProductCatalog(props) {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  const { edges } = props.data.product

  const [activePage, setActivePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(0)
  const [range, setRange] = useState(0)

  const handlePageChange = (pageNumber) => {
    const s = window.scrollTo(0, 0);
    console.log(s)
    setActivePage(pageNumber)
  }

  useEffect(() => {
    setRange(3)
    setItemsPerPage(6)
  }, [])

  const copyArr = edges

  const slicedEdges = copyArr
                    .slice(
                      activePage * itemsPerPage - itemsPerPage,
                      activePage * itemsPerPage
                    )


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
                      slicedEdges.map((item, i) => {
                        return (
                          <li className="product-item" key={i}>
                            <div className="image-holder">
                              <div className="thumbnail">
                                <img src={item.node.frontmatter.image} className="image-thumbnail" alt={item.node.frontmatter.altText} />
                              </div>
                              <Link to={item.node.frontmatter.path} className="custom-btn custom-btn-black">View Details</Link>
                            </div>
                            <div className="text-holder">
                              <h2 className="title">{item.node.frontmatter.title}</h2>
                              <p className="price">${item.node.frontmatter.price}</p>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>

                <Pagination
                  firstPageText={<FontAwesomeIcon icon={faAngleDoubleLeft} className="icon icon-grid display-none" />}
                  prevPageText={<FontAwesomeIcon icon={faArrowAltCircleLeft} className="icon icon-grid" />}
                  nextPageText={<FontAwesomeIcon icon={faArrowAltCircleRight} className="icon icon-grid" />}
                  lastPageText={<FontAwesomeIcon icon={faAngleDoubleRight} className="icon icon-grid display-none" />}
                  activePage={activePage}
                  itemsCountPerPage={itemsPerPage}
                  totalItemsCount={edges.length}
                  pageRangeDisplayed={range}
                  onChange={handlePageChange}
                />
              </TabPane>
              <TabPane tabId="2">
                <div className="list">
                  <ul className="product-listing">
                    {
                      slicedEdges.map((item, i) => {
                        let description = item.node.frontmatter.description;
                        let dotsDescription = description.length > 220 ? '...' : '';
                        let excerptedDescription = description.slice(0, 220) + dotsDescription;
                        return (
                        <div className="product-item" key={i}>
                          <div className="image-holder">
                            <div className="thumbnail">
                              <img src={item.node.frontmatter.image} className="image-thumbnail" alt={item.node.frontmatter.altText} />
                            </div>
                          </div>
                          <div className="text-holder">
                            <h2 className="title">{item.node.frontmatter.title}</h2>
                            <p className="description">{excerptedDescription}</p>
                            <p className="price">${item.node.frontmatter.price}</p>
                            <Link to={item.node.frontmatter.path}className="custom-btn custom-btn-black">View Details</Link>
                          </div>
                        </div>
                        )
                      })
                    }
                  </ul>

                <Pagination
                  firstPageText={<FontAwesomeIcon icon={faAngleDoubleLeft} className="icon icon-grid display-none" />}
                  prevPageText={<FontAwesomeIcon icon={faArrowAltCircleLeft} className="icon icon-grid" />}
                  nextPageText={<FontAwesomeIcon icon={faArrowAltCircleRight} className="icon icon-grid" />}
                  lastPageText={<FontAwesomeIcon icon={faAngleDoubleRight} className="icon icon-grid display-none" />}
                  activePage={activePage}
                  itemsCountPerPage={itemsPerPage}
                  totalItemsCount={edges.length}
                  pageRangeDisplayed={range} onChange={handlePageChange}
                />
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

export const pageQuery = graphql`
  query AllProduct {
    product: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      limit: 600
      filter: { fileAbsolutePath: {regex : "\/product/"} },
    ) {
      edges {
        node {
          html
          frontmatter {
            path
            title
            date
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
    }
  }
`
