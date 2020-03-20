import React from 'react'
import { Link } from "gatsby"


function CategoryListing ({category}) {
  return (
      <div className="section-category-listing">
        <div className="container-fluid">
          <div className="category-listing">
          {category.map((item, i) => {
            let description = item.description;
            let dotsDescription = description.length > 60 ? '...' : '';
            let excerptedDescription = description.slice(0, 60) + dotsDescription;

            return (
              <div className="category-item" key={i}>
                <div className="category-text-wrapper">
                  <h3 className="category-title">{item.title}</h3>
                  <p className="category-description">{excerptedDescription}</p>
                  <Link to={item.url} className="custom-btn custom-btn-black custom-btn-no-border category-button">Discover</Link>
                </div>
                <div className="category-image-wrapper">
                  <img src={item.image} className="category-image" alt={item.imageName}/>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
  )
}

export default CategoryListing