import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

function Header() {
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
            <li className="icon-item">
              <Link className="icon-link" to="">
               <FontAwesomeIcon icon={faShoppingBag} className="icon icon-shopping-bag" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
