import React from "react"
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from "../components/layout";
import SEO from "../components/seo";

import CustomCarousel from "../components/carousel/carousel";
import Features from "../components/features/features";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <CustomCarousel />

    <ScrollAnimation animateIn="zoomIn">
      <Features />
    </ScrollAnimation>
  </Layout>
)

export default IndexPage;
