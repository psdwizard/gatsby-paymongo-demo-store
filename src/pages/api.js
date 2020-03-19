import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import axios from "axios"

const API = () => {
  const [text, setText] = useState("")
  const getAPI = () =>
    axios.get("http://localhost:9000/api/test").then(({ data }) => {
      console.log(data.text)
      setText(data.text)
    })

  useEffect(() => {
    getAPI()
  }, [])
  return (
    <div className="sass-ready">
      <div>THIS IS A an API page</div>
      <p>{text}</p>
      <Link to="/">Back to home</Link>
    </div>
  )
}

export default API
