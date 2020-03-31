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
  let cartItems = []
  let totalAmount = 0;
  let totalQuantity = 0;

  const [paymentData, setData] = useState({
    name: "Marianne",
    email: "marianne@fullstack.ph",
    city: "Malolos",
    country: "Philippines",
    line1: "Test line 1",
    line2: "Test line 2",
    postal_code: "3000",
    state: "Bulacan",
    number: "09254562154",
    expiry: "12",
    year: "22",
    cvc:  "123",
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
        paymentAmount: parseFloat(res[0].substring(1)),
        decimal: res[1].substring(0, res[1].length-1)
      })

      if (paymentData.paymentAmount !== null) { 
        console.log('my payload', paymentData)
        axios.post("https://paymongo-api.onrender.com/api/payment", paymentData)
        .then(({ data }) => {
          setPaymentResult(data);
          
          if (data.error === false) {
            window.location.assign("/fullstackhq-paymongo/success-payment")
          } else {
            window.location.assign("/fullstackhq-paymongo/failed-payment")
          }
          console.log(data)
        })
      }
    }    
  }

  const sumProperty = (arr, type) => {
    return arr.reduce((total, obj) => {
      if (typeof obj[type] === 'string') {
        return total + Number(obj[type]);
      }
      return total + obj[type];
      }, 0);
  }

  if (typeof window !== `undefined`) {
    cartItems = JSON.parse(localStorage.getItem('cartList'))
    if (cartItems !== null) {
      totalAmount = ( sumProperty(cartItems, 'totalPrice') ).toFixed(2); 
      totalQuantity = sumProperty(cartItems, 'qtty'); 
      localStorage.setItem('total', JSON.stringify(totalAmount))
    }
  }

  return (
    <div className="sass-ready">
      <Helmet>
        <title>Fullstack HQ | Checkout</title>
        <meta name="description" content="" />
      </Helmet>
      <Header checkout={true} />
      <main className="checkout-page">
        <div className="container checkout-container">
          <div className="customer-details">
            <div className="detail-block">
              <div className="segment-title">
                  <div className="round-badge">1</div>
                  <p className="title">SHIPPING ADDRESS</p>
                </div>
                <div className="segment-details">
                  <ul className="details-list">
                    <li className="detail-title">Jane Doe</li>
                    <li>DD...</li>
                    <li>DD...</li>
                    <li>AS, 11000</li>
                    <li>Tanzania</li>
                    <li>test@test.test</li>
                  </ul>
                </div>
            </div>
            <div className="detail-block">
              <div className="segment-title">
                  <div className="round-badge">2</div>
                  <p className="title">SHIPPING METHOD</p>
                </div>
                <div className="segment-details">
                  <ul className="details-list">
                    <li className="detail-title">Hermes' Courrier | Free</li>
                  </ul>
                </div>
            </div>
            <div className="detail-block">
              <div className="segment-title">
                  <div className="round-badge">3</div>
                  <p className="title">BILLING ADDRESS</p>
                </div>
                <div className="segment-details">
                  <ul className="details-list">
                    <li className="detail-title">Jane Doe</li>
                    <li>DD...</li>
                    <li>DD...</li>
                    <li>AS, 11000</li>
                    <li>Tanzania</li>
                    <li>test@test.test</li>
                  </ul>
                </div>
            </div>
            <div className="detail-block">
              <div className="segment-title">
                  <div className="round-badge selected">4</div>
                  <p className="title">PAYMENT METHOD</p>
                </div>
                <div className="segment-details checkout-form">
                  <form className="form-wrapper" onSubmit={handleSubmit} >
                    <div className="card-no-wrapper">
                      <input name="number" type="number" className="w-100" min="0" max="9999999999999999" placeholder="Number" onChange={handleData} onInput = {(e) =>{e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,16)}} />  
                    </div>
                    <div className="card-info-wrapper mt-3">
                      <select name="expiry" placeholder="Expiry Month" onChange={handleData} >
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                      <input name="year" type="number" onInput = {(e) =>{e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,4)}} placeholder="Expiry Year" min="0" max="9999" onChange={handleData} /> 
                      <input name="cvc" onInput = {(e) =>{e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,3)}} type="number" placeholder="CVC" min="0" max="999" onChange={handleData} /> 
                    </div>
                    <button type="submit" className="w-100 mt-3 btn-swipe-black hover-swipe-right">PROCEED AND PAY</button>
                  </form>
                </div>
            </div>
          </div>
          <div className="cart-details">
            <p className="cart-detail-title border-bottom-black">CART SUMMARY</p>
            {
              cartItems ? 
                cartItems.map((item, i) => {
                  return (
                    <div key={i} className="cart-product-item border-bottom-black">
                      <div className="image-wrapper">
                        <div className="thumbnail-holder">
                          <img src={item.image1024} className="product-image" alt={item.productName} />
                        </div>
                      </div>
                      <div className="text-wrapper">
                      <h4 className="product-name">{item.productName}</h4>
                      <p className="computation">{item.qtty} x PHP {item.price} = PHP {(item.totalPrice).toFixed(2)}</p>
                      </div>
                    </div>
                  )
                })
              : ''
            }
            <div className="cart-prices border-bottom-black d-flex justify-content-between py-2 px-2">
              <p>Subtotal</p>
              <p>Php {totalAmount}</p>
            </div>
            <div className="cart-prices border-bottom-black d-flex justify-content-between py-2 px-2">
              <p>Delivery</p>
              <p>FREE</p>
            </div>
            <div className="cart-prices border-bottom-black d-flex justify-content-between py-2 px-2">
              <p className="font-weight-bold">GRAND TOTAL</p>
              <p>Php {totalAmount}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default API