import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SwiperBanner from "../components/SwiperBanner"
import CategoryListing from "../components/CategoryListing"
// import { Link } from "gatsby"


const swiperData = [
  {
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    buttonText: "Shop Now",
    buttonLink: "/product-catalog",
    image: require("../images/../assets/images/bootstrap-illustration-3.png"),
    imageName: "image",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    buttonText: "Shop Now",
    buttonLink: "/product-catalog",
    image: require("../images/../assets/images/bootstrap-illustration-12.png"),
    imageName: "image",
  },
]

const categoryData = [
  {
    title: 'Mascots',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    url: '/product-catalog',
    image: require("../images/../assets/images/bootstrap-illustration-12.png"),
    imageName: 'mascot image'
  },
  {
    title: 'Mascots',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    url: '/product-catalog',
    image: require("../images/../assets/images/bootstrap-illustration-12.png"),
    imageName: 'mascot image'
  },
  {
    title: 'Mascots',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    url: '/product-catalog',
    image: require("../images/../assets/images/bootstrap-illustration-3.png"),
    imageName: 'mascot image'
  }
]


export default () =>
  <div>
    <Header />
    <main className="home">
      <SwiperBanner content={swiperData} />
      <CategoryListing category={categoryData} />
    </main>
    <Footer />
  </div>
