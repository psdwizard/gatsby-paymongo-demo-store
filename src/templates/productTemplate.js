import React, { useState, useEffect, useCallback } from "react"
import { Link, graphql } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

import Header from "../components/Header"
import Footer from "../components/Footer"
import {Helmet} from "react-helmet"

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}, props ) {
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

  const {
    className
  } = props;

  const [, updateState] = React.useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  let cartItems = []
  let totalAmount = 0;
  let totalQuantity = 0;

  const removeItem = item => {
    const selectedItem = cartItems.findIndex(x => x.setID === item.setID)
      if (selectedItem > -1) {
        cartItems.splice(selectedItem, 1)
        localStorage.setItem('cartList', JSON.stringify(cartItems))
      }
    forceUpdate()
  }
  
  const sumProperty = (arr, type) => {
      return arr.reduce((total, obj) => {
      if (typeof obj[type] === 'string') {
        return total + Number(obj[type]);
      }
      return total + obj[type];
    }, 0);
  }

  if (typeof window !== `undefined`) {
    cartItems = JSON.parse(localStorage.getItem('cartList'))
    if (cartItems !== null) {
      totalAmount = ( sumProperty(cartItems, 'totalPrice') ).toFixed(2); 
      totalQuantity = sumProperty(cartItems, 'qtty'); 
      localStorage.setItem('total', JSON.stringify(totalAmount))
    }
  }


  useEffect(() => {
    if ( cartList.productName === "" || cartList.cartPressed === false ) {
      console.log('')
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
                  <button
                    className="btn-swipe-black hover-swipe-right"
                    onClick={() => { handleClick(frontmatter); toggle();}}
                    >
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
          
          <div className="section-related-products product-catalog">
            <h2>You may also like</h2>
            <div className="grid">
              <div className="product-listing">
                <div className="product-item">
                  <div className="image-holder">
                    <Link to="/product/fshq-poster-happy">
                      <div className="thumbnail">
                        <img src="https://psdwizard.github.io/gatsby-paymongo-demo-store/assets/FSHQPoster-Happy-300.png" className="image-thumbnail" alt=" FSHQ Poster - Happy" />
                      </div>
                      <Link to="/product/fshq-poster-happy" className="btn-swipe-black hover-swipe-right">View Details</Link>
                    </Link>
                  </div>
                  <div className="text-holder">
                    <h2 className="title">FSHQ Poster - Helpful</h2>
                    <p className="price">PHP 400</p>
                  </div>
                </div>

                <div className="product-item">
                  <div className="image-holder">
                    <Link to="/product/fshq-poster-honest">
                      <div className="thumbnail">
                        <img src="https://psdwizard.github.io/gatsby-paymongo-demo-store/assets/FSHQPoster-Honest-300.png" className="image-thumbnail" alt=" FSHQ Poster - Honestl" />
                      </div>
                      <Link to="/product/fshq-poster-honest" className="btn-swipe-black hover-swipe-right">View Details</Link>
                    </Link>
                  </div>
                  <div className="text-holder">
                    <h2 className="title">FSHQ Poster - Honest</h2>
                    <p className="price">PHP 400</p>
                  </div>
                </div>

                <div className="product-item">
                  <div className="image-holder">
                    <Link to="/product/fshq-poster-hungry">
                      <div className="thumbnail">
                        <img src="https://psdwizard.github.io/gatsby-paymongo-demo-store/assets/FSHQPoster-Hungry-300.png" className="image-thumbnail" alt=" FSHQ Poster - Helpful" />
                      </div>
                      <Link to="/product/fshq-poster-hungry" className="btn-swipe-black hover-swipe-right">View Details</Link>
                    </Link>
                  </div>
                  <div className="text-holder">
                    <h2 className="title">FSHQ Poster - Hungry</h2>
                    <p className="price">PHP 400</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Your Cart</ModalHeader>
        <ModalBody>
          <ul className="cart-product-listing">
            {
              cartItems ? 
                cartItems.map((item, i) => {
                  return (
                    <li key={i} className="cart-product-item">
                      <div className="image-wrapper">
                        <div className="thumbnail-holder">
                          <img src={item.image1024} className="product-image" alt={item.productName} />
                        </div>
                        <Button color="link" onClick={() => removeItem(item)}>Remove</Button>
                      </div>
                      <div className="text-wrapper">
                      <h4 className="product-name">{item.productName}</h4>
                      <p className="computation">{item.qtty} x PHP {item.price} = PHP {(item.totalPrice).toFixed(2)}</p>
                      </div>                  
                    </li>
                  )
                })
              : 'Your cart is empty'
            }
          
          </ul>
        </ModalBody>
        {
          cartItems ? 
          <>
            <div className="total-holder">
              <h3 className="total">
                Total: {} 
                PHP {} {totalAmount}
                </h3>
            </div>
            <div className="btn-holder">
              <Link to="/checkout" className="btn-swipe-black hover-swipe-right btn-checkout">Checkout</Link>
              <Link to="/products" className="btn-swipe-black hover-swipe-right">Continue Shopping</Link>
            </div>
          </>
          : ''
        }
      </Modal>
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