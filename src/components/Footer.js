import React from 'react'
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className="logo-holder">
            <div className="brand-icon-holder">
              <Link to="/">
                <img class="brand-icon" src={require('../assets/images/paymongo-logo.png')} alt="paymongo-logo"/>
              </Link>
            </div>
          </div>
          <div className="links-holder">
            <h2 className="title">CATEGORIES</h2>
            <ul className="list-holder">
              <li className="list-item"><Link to="/" className="link">Lorem ipsum</Link></li>
              <li className="list-item"><Link to="/" className="link">Lorem ipsum</Link></li>
              <li className="list-item"><Link to="/" className="link">Lorem ipsum</Link></li>
            </ul>
          </div>
          <div className="links-holder">
            <h2 className="title">INFORMATION</h2>
            <ul className="list-holder">
              <li className="list-item"><Link to="/" className="link">Lorem ipsum</Link></li>
              <li className="list-item"><Link to="/" className="link">Lorem ipsum</Link></li>
              <li className="list-item"><Link to="/" className="link">Lorem ipsum</Link></li>
              <li className="list-item"><Link to="/" className="link">Lorem ipsum</Link></li>
            </ul>
          </div>
          <div className="links-holder">
            <h2 className="title">SOCIAL</h2>
            <ul className="list-holder">
              <li className="list-item">
                <Link to="/" className="link">
                  <FontAwesomeIcon icon={faInstagram} className="icon" />
                  Instagram
                </Link>
              </li>
              <li className="list-item">
                <Link to="/" className="link">
                 <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
                  Facebook
                 </Link>
                </li>
              <li className="list-item">
                <Link to="/" className="link">
                  <FontAwesomeIcon icon={faTwitter} className="icon" />
                  Twitter
                </Link>
              </li>
              <li className="list-item">
                <Link to="/" className="link">
                  <FontAwesomeIcon icon={faPinterest} className="icon" />
                  Pinterest
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
