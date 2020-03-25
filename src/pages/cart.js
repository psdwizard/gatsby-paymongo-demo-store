import React, { useState } from 'react'

import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"

const Cart = () => {

  const [cartList, setCartList] = useState([
    {
      productName: "FSHQ Mug",
      price: 10.43,
      qtty: 1,
    },
    {
      productName: "FSHQ Black Shirt",
      price: 4.43,
      qtty: 1,
    }
  ])

  return (
    <div>Cart

    {[...cartList.keys()].map(i => (
      <li key={i}>fsdfsdfdsfsd</li>
    ))}
    </div>
  )
}

export default Cart