import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"

import Header from "../components/Header"
import Footer from "../components/Footer"
import {Helmet} from "react-helmet"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter } = markdownRemark
  const [cartList, setCartList] = useState({
    setID: null,
    productName: "",
    description: "",
    price: "",
    qtty: "1",
    image1024: "",
    cartPressed: false,
    totalPrice: null
  })

  const handleClick = (content) => {
    setCartList({
      ...cartList,
      setID: content.setID,
      productName: content.title,
      description: content.description,
      price: content.price,
      image1024: content.image1024,
      cartPressed: true,
      totalPrice: parseFloat(cartList.qtty) * parseFloat(content.price)
    })
  }

  const handleChange = (e) => {
    const value = e.target.value
    setCartList({
      ...cartList,
      'qtty' : value 
    })
  }

  useEffect(() => {
    if ( cartList.productName === "" || cartList.cartPressed === false ) {
      console.log('blank state')
    } else {
      var allEntries = JSON.parse(localStorage.getItem('cartList')) || [];
      const x = (allEntries.findIndex(x => x.setID === cartList.setID))
      if (x >= 0) {  
        allEntries[x].qtty = parseFloat(allEntries[x].qtty) + parseFloat(cartList.qtty);
        allEntries[x].totalPrice = parseFloat(allEntries[x].qtty) * parseFloat(allEntries[x].price);
      } else {
        allEntries.push(cartList)
      }   

      localStorage.setItem('cartList', JSON.stringify(allEntries))
      setCartList({
        ...cartList, 
        cartPressed: false
      })
      // alert('added!') 
    }
  }, [cartList])

  return (
    <div>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content="" />
      </Helmet>
      <Header />
      <main className="product-details">
        <div className="container">
          <div className="section-product">
            <div className="product-wrapper">
              <div className="image-holder">
                <img className="product-image" src={frontmatter.image1024} alt={frontmatter.altText}/>
              </div>
              <div className="details-holder">
                <h1 className="name">{frontmatter.title}</h1>
                <h2 className="price">PHP{frontmatter.price}</h2>
                <div className="desc-holder">
                  <h2 className="label">Description</h2>
                  <p>{frontmatter.description}</p>
                </div>
                <div className="add-cart-holder">
                  <select name="qtty" className="quantity-select" onChange={handleChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <button onClick={() => handleClick(frontmatter)} 
                    className="btn-swipe-black hover-swipe-right">
                    Add to Cart
                  </button>
                </div>
                <div className="social-holder">
                  <Link to="#" className="icon-link twitter">
                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                    <span className="tooltip">Share on twitter</span>
                  </Link>
                  <Link to="#" className="icon-link facebook">
                    <FontAwesomeIcon icon={faFacebookF} className="icon" />
                  </Link>
                  <Link to="#" className="icon-link linkedin">
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
        setID
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        price
        image1024
        altText
        weight
        dimensions
        materials
        OtherInfo
      }
    }
  }
`