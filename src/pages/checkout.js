import React, { useState } from "react"
import { Link } from "gatsby"
import axios from "axios"

import Header from "../components/Header"
import Banner from "../components/Banner"

const API = () => {
  const [paymentData, setData] = useState({
    number: "",
    expiry: "",
    year: "",
    cvc:  "",
    paymentAmount: "250",
    decimal: "10",
    currency: "PHP",
    description: "This is only a test made by FS",
    statement_descriptor: "This is only a test"
  })

  const [paymentResult, setPaymentResult] = useState({
    error: "",
    data: {
      type: "",
      code: ""
    }
  })

  const handleData = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData({
      ...paymentData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://fshq-paymongo-app.herokuapp.com/api/payment", paymentData)
    .then(({ data }) => {
      setPaymentResult(data);
      console.log(data)
    })
  }

  return (
    <div className="sass-ready">
      <Header />
      <main className="checkout-page">
        <Banner content={{ title: 'Checkout' }} />
        <div className="payment-content-wrapper">
          <div className="container content-wrapper">
            <div className="form-wrapper">
              <form onSubmit={handleSubmit} >

                <div className="form-separator">
                  <h2 className="separator-title">Contact Information</h2>
                </div>
                <div className="input-group-wrapper">
                  <input type="text" placeholder="Full Name" required />
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="form-separator">
                  <h2 className="separator-title">Billing Address</h2>
                </div>
                <div className="input-group-wrapper">
                  <input type="text" placeholder="Line 1 Address"/>
                  <input type="text" placeholder="Line 2 Address"/>
                </div>
                <div className="input-group-wrapper">
                  <input type="text" placeholder="City"/>
                  <input type="text" placeholder="State / Province / Region"/>
                </div>
                <div className="input-group-wrapper">
                  <input type="text" placeholder="Country"/>
                  <input type="text" placeholder="ZIP Code"/>
                </div>

                <div className="form-separator">
                  <h2 className="separator-title">Payment Method</h2>
                </div>
                <div className="card-no-wrapper">
                  <input name="number" type="text" className="w-100s" placeholder="Number" onChange={handleData} />  
                </div>
                <div className="card-info-wrapper">
                  <input name="expiry" type="text"placeholder="Expiry Month" onChange={handleData} /> 
                  <input name="year" type="text" placeholder="Expiry Year" onChange={handleData} /> 
                  <input name="cvc" type="text" placeholder="CVC" onChange={handleData} /> 
                </div>
                <button type="submit" className="btn-swipe-black hover-swipe-right">PROCEED AND PAY {paymentData.currency} {paymentData.paymentAmount}.{paymentData.decimal}</button>
              </form>
            </div>
            <div className="order-summary">
              <div className="cart-summary">
                <div className="summary-banner text-center">SHOPPING CART</div>
                <div className="cart-item">
                  <div className="product-image">&nbsp;</div>
                  <div className="prod-data-wrapper">
                    <p className="product-name">{paymentData.description}</p>
                    <div className="monetary-wrapper">
                      <p className="product-qtty">x5</p>
                      <p className="product-price">{paymentData.currency} {paymentData.paymentAmount}.{paymentData.decimal}</p>
                    </div>
                  </div>
                </div>
                <div className="cart-item">
                  <div className="product-image">&nbsp;</div>
                  <div className="prod-data-wrapper">
                    <p className="product-name">{paymentData.description}</p>
                    <div className="monetary-wrapper">
                      <p className="product-qtty">x5</p>
                      <p className="product-price">{paymentData.currency} {paymentData.paymentAmount}.{paymentData.decimal}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="mb-0">Subtotal:</p>
                <h2 className="subtotal-amount">PHP 250.10</h2>
              </div>
            </div>
          </div>
        </div>

        {
          paymentResult.error ? window.location.replace(`/failed-payment`) : 
            paymentResult.data.type ? window.location.replace(`/success-payment`) : 
              paymentResult.data.code ? "there could be an error in one of ur fields" : ''
        }
        <Link to="/">Back to home</Link>
      </main>
      
    </div>
  )
}

export default API
