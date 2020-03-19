import React from "react"
import Header from "../components/Header"
import SwiperBanner from "../components/SwiperBanner"
// import { Link } from "gatsby"


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


export default () =>
  <div>
    <Header />
    <main className="home">
      <SwiperBanner content={swiperData} />
    </main>
  </div>
