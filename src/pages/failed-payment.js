import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

const failedPayment = () => {
  return (
    <div>
      <Header />
      <main className="success-payment">
        <div className="container">
          <img className="mascot" src={require('../assets/images/Bootstrap Sad.png')} alt="fs success"/>
          <div className="text-wrapper">
            <h2>Payment not accepted</h2>
            <p>Please try again or use another method</p>
            <Link to="/checkout" className="btn-swipe-black hover-swipe-right">Back</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default failedPayment