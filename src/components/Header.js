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
              <Link to="/" className="link">Product</Link>
            </li>
            <li className="link-item">
              <Link to="/" className="link">About</Link>
            </li>
            <li className="link-item">
              <Link to="/" className="link">Collection</Link>
            </li>
          </ul>

          <div>
            <Link to="/">
              <img class="brand-icon" src={require('../assets/images/paymongo-logo.png')} alt="paymongo-logo"/>
            </Link>
          </div>

          <ul className="icon-listing">
            <li className="icon-item">
              <Link className="icon" to="">
               <FontAwesomeIcon icon={faSearch} className="icon icon-search" />
              </Link>
            </li>
            <li className="icon-item">
              <Link className="icon" to="">
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
