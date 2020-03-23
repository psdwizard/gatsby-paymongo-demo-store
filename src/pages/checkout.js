import React, { useState } from "react"
import { Link } from "gatsby"
import axios from "axios"

const API = () => {
  const [paymentData, setData] = useState({
    number: "",
    expiry: "",
    year: "",
    cvc:  "",
    paymentAmount: "",
    decimal: "",
    currency: "",
    description: "",
    statement_descriptor: ""
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
      <div>This is going to be the checkout page</div>
      <form onSubmit={handleSubmit} >
        <input name="number" type="text" placeholder="Number" onChange={handleData} /> <br/>
        <input name="expiry" type="text"placeholder="Expiry" onChange={handleData} /> <br/>
        <input name="year" type="text" placeholder="Year" onChange={handleData} /> <br/>
        <input name="cvc" type="text" placeholder="CVC" onChange={handleData} /> <br/>
        <input name="paymentAmount"  placeholder="Payment" type="text" onChange={handleData} /> <br/>
        <input name="decimal" type="text" placeholder="Decimal" onChange={handleData} /> <br/>
        <input name="currency" type="text" placeholder="Currency" onChange={handleData} /> <br/>
        <input name="description" type="text" placeholder="Description" onChange={handleData} /> <br/>
        <input name="statement_descriptor" type="text" placeholder="Statement Descriptor" onChange={handleData} /> <br/>
        <button type="submit">submit</button>
      </form>
      {
        paymentResult.error ? window.location.replace(`/failed-payment`) : 
          paymentResult.data.type ? window.location.replace(`/success-payment`) : 
            paymentResult.data.code ? "there could be an error in one of ur fields" : ''
      }
      <Link to="/">Back to home</Link>
    </div>
  )
}

export default API
