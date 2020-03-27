import React, { useState, useCallback } from 'react';
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

function Header(props) {
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
                  return (
                    <li key={i} className="cart-product-item">
                      <div className="image-wrapper">
                        <div className="thumbnail-holder">
                          <img src={item.image} className="product-image" alt={item.productName} />
                        </div>
                        <Button color="link" onClick={() => removeItem(item)}>Remove</Button>
                      </div>
                      <div className="text-wrapper">
                      <h4 className="product-name">{item.productName}</h4>
                      <p className="computation">{item.qtty} x PHP{item.price} = PHP{item.totalPrice}</p>
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
                PHP{} {totalAmount}
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
