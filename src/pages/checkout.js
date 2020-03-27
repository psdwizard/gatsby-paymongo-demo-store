import React, { useState } from "react"
import { Link } from "gatsby"
import axios from "axios"

import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import {Helmet} from "react-helmet"

const API = () => {
  const [paymentData, setData] = useState({
    name: "",
    email: "",
    city: "",
    country: "",
    line1: "",
    line2: "",
    postal_code: "",
    state: "",
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
    
    localStorage.setItem('myValueInLocalStorage', JSON.stringify(paymentData));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://paymongo-api.onrender.com/api/payment", paymentData)
    .then(({ data }) => {
      setPaymentResult(data);
      console.log(data)
    })
  }

  return (
    <div className="sass-ready">
      <Helmet>
        <title>Fullstack HQ | Checkout</title>
        <meta name="description" content="" />
      </Helmet>
      <Header />
      <main className="checkout-page">
        <Banner content={{ title: 'Checkout' }} />
        <div className="payment-content-wrapper container">
          <div className="content-wrapper">
            <div className="form-wrapper">
              <form onSubmit={handleSubmit} >

                <div className="form-separator">
                  <h2 className="separator-title">Contact Information</h2>
                </div>
                <div className="input-group-wrapper">
                  <input name="name" type="text" placeholder="Full Name" onChange={handleData} required />
                  <input name="email" type="email" placeholder="Email" onChange={handleData} required />
                </div>
                <div className="form-separator">
                  <h2 className="separator-title">Billing Address</h2>
                </div>
                <div className="input-group-wrapper">
                  <input name="line1" type="text" placeholder="Line 1 Address" onChange={handleData} />
                  <input name="line2" type="text" placeholder="Line 2 Address" onChange={handleData} />
                </div>
                <div className="input-group-wrapper">
                  <input name="city" type="text" placeholder="City" onChange={handleData} />
                  <input name="state" type="text" placeholder="State / Province / Region" onChange={handleData} />
                </div>
                <div className="input-group-wrapper">
                  <input name="country" type="text" placeholder="Country" onChange={handleData} />
                  <input name="postal_code" type="text" placeholder="ZIP Code" onChange={handleData} />
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
          </div>
        </div>

        {
          paymentResult.error ? window.location.replace(`/failed-payment`) : 
            paymentResult.data.type ? window.location.replace(`/success-payment`) : 
              paymentResult.data.code ? "there could be an error in one of ur fields" : ''
        }
      </main>
      <Footer />
    </div>
  )
}

export default API
