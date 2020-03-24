import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

const successPayment = () => {
  return (
    <div>
      <Header />
      <main className="success-payment">
        <div className="container">
          <img className="mascot" src={require('../assets/images/Bootstrap Good job.png')} alt="fs success"/>
          <div className="text-wrapper">
            <h2>Payment Successful</h2>
            <p>Thanks for your purchase!</p>
            <Link to="/product-catalog" className="btn-swipe-black hover-swipe-right">Continue Shopping</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default successPayment