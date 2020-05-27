import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import CreditCardInput from "react-credit-card-input"
import axios from "axios"
import classNames from "classnames"

import Header from "../components/Header"

const API = () => {
  let cartItems = []
  let totalAmount = 0

  const [paymentData, setData] = useState({
    name: "Marianne",
    email: "marianne@fullstack.ph",
    city: "Malolos",
    country: "Philippines",
    line1: "Test line 1",
    line2: "Test line 2",
    postal_code: "3000",
    state: "Bulacan",
    number: "",
    expiry: "",
    cvc: "",
    paymentAmount: null,
    decimal: "",
    currency: "PHP",
    description: "FIRST EVER FE TEST",
    statement_descriptor: "This is only a test",
  })

  const [loading, setLoading] = useState(false)

  const [paymentResult, setPaymentResult] = useState({
    error: "",
    data: {
      type: "",
      code: "",
    },
  })

  const handleData = e => {
    const name = e.target.name
    const value = e.target.value

    setData({
      ...paymentData,
      [name]: value.replace(/\s/g, ""),
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)

    if (typeof window !== `undefined`) {
      if (paymentData.paymentAmount !== null) {
        // axios.post("https://paymongo-api-v2.onrender.com/api/payment", paymentData)
        // .then(({ data }) => {
        //   setLoading(false);
        //   setPaymentResult(data);
        //   if (data.error === false) {
        //     window.location.assign("/gatsby-paymongo-demo-store/success-payment")
        //   } else {
        //     window.location.assign("/gatsby-paymongo-demo-store/failed-payment")
        //   }
        // })
        var auth = btoa("sk_test_F7QK6Qjb827V8jtFYyNqrioA")

        var cardNumber = paymentData.number
        var expiry = paymentData.expiry
        var expiryArray = expiry.split("/")
        var expMonth = parseInt(expiryArray[0])
        var expYear = parseInt(expiryArray[1])
        var cvc = paymentData.cvc
        //execute payment method attach to payment intent trhough backend
        axios
          .post(
            "https://api.paymongo.com/v1/payment_methods",
            {
              data: {
                attributes: {
                  type: "card", // The only available type for now is 'card'.
                  details: {
                    card_number: cardNumber,
                    exp_month: expMonth,
                    exp_year: expYear,
                    cvc: cvc,
                  },
                },
              },
            },
            {
              headers: {
                "content-type": "application/json",
                // Base64 encoded public PayMongo API key.
                authorization: "Basic " + auth,
              },
            }
          )
          .then(function(response) {
            var pmID = response.data.data.id
            // console.log(response.data.data)
            // request for payment intent attachment
            var bodyRequest = {
              pmID,
              amount: paymentData.paymentAmount,
              decimal: paymentData.decimal,
            }
            axios
              .post("http://localhost:9000/api/payment", bodyRequest)
              .then(function(res) {
                console.log(res)
                var data = res.data.data

                if (data.status == "success") {
                  window.location.assign(
                    // "/gatsby-paymongo-demo-store/success-payment"
                    "/success-payment"
                  )
                } else {
                  window.location.assign(
                    // "/gatsby-paymongo-demo-store/failed-payment"
                    "/failed-payment"
                  )
                }
                console.log(res)
              })
          })
      }
    }
  }

  const sumProperty = (arr, type) => {
    return arr.reduce((total, obj) => {
      if (typeof obj[type] === "string") {
        return total + Number(obj[type])
      }
      return total + obj[type]
    }, 0)
  }

  if (typeof window !== `undefined`) {
    cartItems = JSON.parse(localStorage.getItem("cartList"))
    if (cartItems !== null) {
      totalAmount = sumProperty(cartItems, "totalPrice").toFixed(2)
      localStorage.setItem("total", JSON.stringify(totalAmount))
    }
  }

  useEffect(() => {
    if (typeof window !== `undefined`) {
      var res = localStorage.getItem("total").split(".")

      setData({
        ...paymentData,
        paymentAmount: parseFloat(res[0].substring(1)),
        decimal: res[1].substring(0, res[1].length - 1),
      })
    }
  }, [])

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
                <form className="form-wrapper" onSubmit={handleSubmit}>
                  <div className="card-info-wrapper mt-3">
                    <CreditCardInput
                      cardCVCInputProps={{
                        name: "cvc",
                        onChange: handleData,
                      }}
                      cardExpiryInputProps={{
                        name: "expiry",
                        onChange: handleData,
                      }}
                      cardNumberInputProps={{
                        name: "number",
                        onChange: handleData,
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className={classNames(
                      "w-100 mt-3 btn-swipe-black hover-swipe-right btn-submit",
                      {
                        disabled:
                          paymentData.number === "" ||
                          paymentData.expiry === "" ||
                          paymentData.cvc === "" ||
                          loading === true,
                      }
                    )}
                  >
                    {loading ? "LOADING..." : "PROCEED AND PAY"}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="cart-details">
            <p className="cart-detail-title border-bottom-black">
              CART SUMMARY
            </p>
            <span>
              {cartItems
                ? cartItems.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="cart-product-item border-bottom-black"
                      >
                        <div className="image-wrapper">
                          <div className="thumbnail-holder">
                            <img
                              src={item.image1024}
                              className="product-image"
                              alt={item.productName}
                            />
                          </div>
                        </div>
                        <div className="text-wrapper">
                          <h4 className="product-name">{item.productName}</h4>
                          <p className="computation">
                            {item.qtty} x PHP {item.price} = PHP{" "}
                            {item.totalPrice.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    )
                  })
                : ""}
            </span>
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
