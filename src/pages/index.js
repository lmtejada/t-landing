import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import CustomCarousel from "../components/carousel"
import Navigation from "../components/navigation"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Navigation />
    <CustomCarousel />
    <Link to="/about-us/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
