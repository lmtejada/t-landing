import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import CustomCarousel from "../components/carousel/carousel";
import Features from "../components/features/features";
import Profiles from "../components/profiles/profiles";
import Products from "../components/products/products";
import Plans from "../components/plans/plans";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <CustomCarousel />
    <Features />
    <Profiles />
    <Products />
    <Plans />
    {/* <Link to="/about-us/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage;
