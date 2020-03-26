import React, { useState, useEffect} from 'react';
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
  let cartItems = []

  if (typeof window !== `undefined`) {
    cartItems = JSON.parse(localStorage.getItem('cartList'))
  }
  
  function sumProperty(arr, type) {
    return arr.reduce((total, obj) => {
      if (typeof obj[type] === 'string') {
        return total + Number(obj[type]);
      }
      return total + obj[type];
    }, 0);
  }
  
  let totalAmount = ( sumProperty(cartItems, 'price') ).toFixed(2); 
  let totalQuantity = sumProperty(cartItems, 'qtty'); 
  
  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul className="link-listing">
            <li className="link-item">
              <Link to="/product-catalog" className="link">Products</Link>
            </li>
          </ul>

          <div className="brand-icon-holder">
            <Link to="/">
              <img className="brand-icon" src={require('../assets/images/fs-logo.png')} alt="fullstackhq-logo"/>
            </Link>
          </div>

          <ul className="icon-listing">
            <li className="icon-item" onClick={toggle}>
              <div className="icon-link">
                <FontAwesomeIcon icon={faShoppingBag} className="icon icon-shopping-bag" />
                <span className="cart-quantity">{totalQuantity}</span>
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
                  let subtotalItem = (parseInt(item.price) * item.qtty).toFixed(2)

                  return (
                    <li key={i} className="cart-product-item">
                      <div className="image-wrapper">
                        <div className="thumbnail-holder">
                          <img src={item.image} className="product-image" alt={item.productName} />
                        </div>
                        <Button color="link">Remove</Button>
                      </div>
                      <div className="text-wrapper">
                      <h4 className="product-name">{item.productName}</h4>
                      <p className="computation">{item.qtty} x ${item.price} = ${subtotalItem}</p>
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
                ${totalAmount}
                </h3>
            </div>
            <div className="btn-holder">
              <Link to="/checkout" className="btn-swipe-black hover-swipe-right btn-checkout">Checkout</Link>
              <Link to="/product-catalog" className="btn-swipe-black hover-swipe-right">Continue Shopping</Link>
            </div>
          </>
         : ''
        }
      </Modal>
    </header>
  )
}

export default Header
