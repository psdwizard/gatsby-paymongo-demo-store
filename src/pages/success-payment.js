import React, { useEffect, useCallback } from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"

const SuccessPayment = () => {
  // const [, updateState] = React.useState()
  // const forceUpdate = useCallback(() => updateState({}), [])

  // useEffect(() => {
  //   if (typeof window !== `undefined`) {
  //     localStorage.clear()
  //     // forceUpdate()
  //   }
  // })

  return (
    <div>
      <Helmet>
        <title>Fullstack HQ | Success Payment</title>
        <meta name="description" content="" />
      </Helmet>
      <Header />
      <main className="success-payment">
        <div className="container">
          <img
            className="mascot"
            src={require("../assets/images/Bootstrap Good job.png")}
            alt="fs success"
          />
          <div className="text-wrapper">
            <h2>Payment Successful</h2>
            <p>Thanks for your purchase!</p>
            <Link to="/products" className="btn-swipe-black hover-swipe-right">
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default SuccessPayment
