import React from "react"
import Header from "../components/Header"
import { Link } from "gatsby"
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

const swiperData = [
  {
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    buttonText: "Shop Now",
    buttonLink: "/",
    image: require("../images/../assets/images/bootstrap-illustration-3.png"),
    imageName: "image",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    buttonText: "Shop Now",
    buttonLink: "/",
    image: require("../images/../assets/images/bootstrap-illustration-12.png"),
    imageName: "image",
  },
]

const params = {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1,
  slidesPerGroup: 1,

  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false
  // }
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
                        className="btn btn-white"
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


export default () =>
  <div>
    <Header />
    <main className="home">
        <SwiperBanner content={swiperData} />
    </main>
  </div>
