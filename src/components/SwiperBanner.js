import React from 'react'
import { Link } from "gatsby"
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

const params = {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1,
  slidesPerGroup: 1,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
}

function SwiperBanner ({content}) {
  return (
      <div className="section-swiper-banner">
        <Swiper {...params}>
          {content.map((item, i) => {
            return (
              <div key={i} className="slider-content">
                <div className="container">
                  <div className="banner-content"> 
                    <div className="text-wrapper">
                      <h1 className="title">
                        {item.title}
                      </h1>
                      <p className="description">
                        {item.description}
                      </p>
                      <Link
                        to={item.buttonLink}
                        className="btn-swipe-white hover-swipe-right"
                      >
                        {item.buttonText}
                      </Link>
                    </div>

                    <div className="image-wrapper">
                      <img src={item.image} className="image" alt={item.imageName}/>
                    </div>
                  </div>
              </div>
            </div>
            )
          })}
        </Swiper>
      </div>
  )
}

export default SwiperBanner