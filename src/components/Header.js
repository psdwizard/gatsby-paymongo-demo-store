import React, { useState} from 'react';
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Header(props) {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  const cartItems = JSON.parse(localStorage.getItem('cartList'))
  
  // console.log(cartItems);

  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul className="link-listing">
            <li className="link-item">
              <Link to="/product-catalog" className="link">Product</Link>
            </li>
            <li className="link-item">
              <Link to="/" className="link">About</Link>
            </li>
            <li className="link-item">
              <Link to="/" className="link">Collection</Link>
            </li>
            <li className="link-item show-mb">
              <Link to="/product-catalog" className="link">Shop</Link>
            </li>
          </ul>

          <div className="brand-icon-holder">
            <Link to="/">
              <img className="brand-icon" src={require('../assets/images/fs-logo.png')} alt="fullstackhq-logo"/>
            </Link>
          </div>

          <ul className="icon-listing">
            <li className="icon-item">
              <Link className="icon-link" to="">
               <FontAwesomeIcon icon={faSearch} className="icon icon-search" />
              </Link>
            </li>
            <li className="icon-item" onClick={toggle}>
              <div className="icon-link">
               <FontAwesomeIcon icon={faShoppingBag} className="icon icon-shopping-bag" />
              </div>
            </li>
          </ul>
        </nav>
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
                        {/* <img src={require("../images/../assets/images/bootstrap-illustration-3.png")} className="product-image" alt="product-name" /> */}
                        <Button color="link">Remove</Button>
                      </div>
                      <div className="text-wrapper">
                      <img src={item.image} className="product-image" alt={item.productName} />
                      <h4 className="product-name">{item.productName}</h4>
                      <p className="computation">Qtty: {item.qtty}</p>
                      <p className="computation">{item.price}</p>
                      </div>
                    </li>
                  )
                })
              : 'ur cart is empty, r u a hobo?'
            }
          
          </ul>
        </ModalBody>
        <Link to="/checkout" className="btn-swipe-black hover-swipe-right">Checkout</Link>
        <Link to="/product-catalog" className="btn-swipe-black hover-swipe-right">Continue Shopping</Link>
      </Modal>
    </header>
  )
}

export default Header
