import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import axios from "axios"

const API = () => {
  const [text, setText] = useState("")

  const paymentData = {
    "number":"4242424242424242",
    "expiry":3,
    "year":23,
    "cvc": "123",
    "paymentAmount": 1000,
    "decimal": "12",
    "currency": "PHP",
    "description": "Fullstack pro version",
    "statement_descriptor": "120 hours of unlimited tasks"
  }

  const getAPI = () =>
    axios.post("http://localhost:9000/api/payment", paymentData)
    .then(({ data }) => {
      console.log(data.data);
    })

  useEffect(() => {
    getAPI()
  }, [])
  return (
    <div className="sass-ready">
      <div>This is going to be the checkout page</div>
      <p>{text}</p>
      <Link to="/">Back to home</Link>
    </div>
  )
}

export default API
