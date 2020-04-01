import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SwiperBanner from "../components/SwiperBanner"
import CardListing from "../components/CardListing"
import {Helmet} from "react-helmet"

const swiperData = [
  {
    title: "The Universal Commerce Suite Demo Store",
    description: "This is a Gatsby demo store with PayMongo API integration to process payments.",
    buttonText: "Shop Now",
    buttonLink: "/products",
    image: require("../images/../assets/images/bootstrap-illustration-3.png"),
    imageName: "image",
  },
  {
    title: "The Universal Commerce Suite Demo Store",
    description: "This is a Gatsby demo store with PayMongo API integration to process payments.",
    buttonText: "Shop Now",
    buttonLink: "/products",
    image: require("../images/../assets/images/bootstrap-illustration-12.png"),
    imageName: "image",
  },
]

const cardData = [
  {
    title: 'Clothing',
    description: 'We have an assortment of great clothes including hoodies, t-shirts and more.',
    url: '/products',
    image: require("../images/../assets/images/bootstrap-illustration-12.png"),
    imageName: 'mascot image'
  },
  {
    title: 'Accessories',
    description: 'We got the purrfect categories and sets of accessories for you.',
    url: '/products',
    image: require("../images/../assets/images/bootstrap-illustration-12.png"),
    imageName: 'mascot image'
  },
  {
    title: 'Home Decor',
    description: 'Kitty up your home with these awesome cat mugs, posters and more!',
    url: '/products',
    image: require("../images/../assets/images/bootstrap-illustration-3.png"),
    imageName: 'mascot image'
  }
]


export default () =>
  <div>
    <Helmet>
      <title>Fullstack HQ</title>
      <meta name="description" content="" />
    </Helmet>
    <Header />
    <main className="home">
      <SwiperBanner content={swiperData} />
      <CardListing card={cardData} />
    </main>
    <Footer />
  </div>
