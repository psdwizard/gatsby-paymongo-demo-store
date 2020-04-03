import React from 'react'
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faTwitter, faDribbble } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className="logo-holder">
            <div className="brand-holder">
              <Link to="/">
                <img className="brand-icon" src={require('../assets/images/fs-logo.png')} alt="paymongo-logo"/>
              </Link>
              <p>
                Built with <span>&#128153;</span> by <a href="https://fullstackhq.com/" target="_blank" rel="noopener noreferrer">Fullstack HQ</a>. Powered by Gatsby + PayMongo API
              </p>
            </div>
          </div>
          <div className="links-holder">
            <h2 className="title">CATEGORIES</h2>
            <ul className="list-holder">
              <li className="list-item"><Link to="/products" className="link">Clothing</Link></li>
              <li className="list-item"><Link to="/products" className="link">Accessories</Link></li>
              <li className="list-item"><Link to="/products" className="link">Home Decor</Link></li>
            </ul>
          </div>
          <div className="links-holder">
            <h2 className="title">INFORMATION</h2>
            <ul className="list-holder">
              <li className="list-item"><Link to="#" className="link">About</Link></li>
              <li className="list-item"><Link to="#" className="link">Shipping & Returns</Link></li>
              <li className="list-item"><Link to="#" className="link">Privacy Policy</Link></li>
              <li className="list-item"><Link to="#" className="link">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div className="links-holder">
            <h2 className="title">SOCIAL</h2>
            <ul className="list-holder">
            <li className="list-item">
                <a href="https://facebook.com/fullstackhq/" target="blank" className="link">
                 <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
                  Facebook
                 </a>
              </li>

              <li className="list-item">
                <a href="https://dribbble.com/fullstackhq" target="blank" className="link">
                  <FontAwesomeIcon icon={faDribbble} className="icon" />
                  Dribbble
                </a>
              </li>

              <li className="list-item">
                <a href="https://www.instagram.com/fullstackhq/" target="blank" className="link">
                  <FontAwesomeIcon icon={faInstagram} className="icon" />
                  Instagram
                </a>
              </li>
              
              <li className="list-item">
                <a href="https://twitter.com/fullstackhq" target="blank" className="link">
                  <FontAwesomeIcon icon={faTwitter} className="icon" />
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
