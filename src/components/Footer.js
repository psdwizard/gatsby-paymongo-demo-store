import React from 'react'
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons"
import { faHeart } from '@fortawesome/free-solid-svg-icons'

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
                Built with <FontAwesomeIcon icon={faHeart} className="heart-icon" /> by <a href="https://fullstackhq.com/" target="_blank" rel="noopener noreferrer">Fullstack HQ</a>. Powered by Gatsby + Netlify + PayMongo API.
              </p>
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
                <a href="/" target="blank" className="link">
                  <FontAwesomeIcon icon={faInstagram} className="icon" />
                  Instagram
                </a>
              </li>
              <li className="list-item">
                <a href="/" target="blank" className="link">
                 <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
                  Facebook
                 </a>
                </li>
              <li className="list-item">
                <a href="/" target="blank" className="link">
                  <FontAwesomeIcon icon={faTwitter} className="icon" />
                  Twitter
                </a>
              </li>
              <li className="list-item">
                <a href="/" target="blank" className="link">
                  <FontAwesomeIcon icon={faPinterest} className="icon" />
                  Pinterest
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
