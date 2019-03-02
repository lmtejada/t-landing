import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import CustomCarousel from "../components/carousel/carousel";
import Profiles from "../components/profiles/profiles";
import Features from "../components/features/features";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <CustomCarousel />
    <Features />
    <Profiles />
    {/* <Link to="/about-us/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage;
