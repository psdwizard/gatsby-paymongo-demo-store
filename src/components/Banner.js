import React from 'react'
import { Link } from "gatsby"

function Banner ({content}) {
  return (
    <div className="section-banner">
      <div className="container">
        <h1 className="banner-title">{content.title}</h1>
      </div>
    </div>
  )
}

export default Banner