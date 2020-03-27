import React, { useState, useEffect } from "react"
import axios from "axios"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import {Helmet} from "react-helmet"

const API = () => {
  let total = "";
  let paymentAmount = "";
  let decimal = "";

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
    paymentAmount: null,
    decimal: "",
    currency: "PHP",
    description: "FIRST EVER FE TEST",
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
    
    if (typeof window !== `undefined`) {
      var res = (localStorage.getItem('total').split('.'))

      setData({ 
        ...paymentData,
        paymentAmount: parseInt(res[0].substring(1)),
        decimal: res[1].substring(0, res[1].length-1)
      })

      if (paymentData.paymentAmount !== null) { 
        console.log('my payload', paymentData)
        axios.post("http://localhost:9000/api/payment", paymentData)
        .then(({ data }) => {
          setPaymentResult(data);
          // console.log(paymentResult);
          if (data.error === false) {
            window.location.replace(`/success-payment`)
          } else {
            window.location.replace(`/failed-payment`) 
          }
          console.log(data)
        })
      }
    }    
  }

  // useEffect(() => {
  //   // console.log(paymentResult)
  // }, [paymentResult])

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
                {}
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
                <button type="submit" className="btn-swipe-black hover-swipe-right">PROCEED AND PAY</button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
export default API