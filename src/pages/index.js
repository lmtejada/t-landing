import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import CustomCarousel from "../components/carousel/carousel";
import FeaturePanels from "../components/features/featurePanels";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <CustomCarousel />
    <FeaturePanels />
  </Layout>
)

export default IndexPage;
