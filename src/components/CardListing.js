import React from 'react'
import { Link } from "gatsby"


function cardListing ({card}) {
  return (
      <div className="section-custom-card-listing">
        <div className="container-fluid">
          <div className="custom-card-listing">
          {card.map((item, i) => {
            let description = item.description;
            let dotsDescription = description.length > 80 ? '...' : '';
            let excerptedDescription = description.slice(0, 80) + dotsDescription;

            return (
              <div className="custom-card-item" key={i}>
                <div className="custom-card-text-wrapper">
                  <h3 className="custom-card-title">{item.title}</h3>
                  <p className="custom-card-description">{excerptedDescription}</p>
                  <Link to={item.url} className="btn-swipe-black hover-swipe-right">Discover</Link>
                </div>
                <div className="custom-card-image-wrapper">
                  <img src={item.image} className="custom-card-image" alt={item.imageName}/>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
  )
}

export default cardListing