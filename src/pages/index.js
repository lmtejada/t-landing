import React from "react"
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from "../components/layout";
import SEO from "../components/seo";

import CustomCarousel from "../components/carousel/carousel";
import FeaturePanels from "../components/features/featurePanels";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <CustomCarousel />
<<<<<<< HEAD
    <FeaturePanels />
=======

    {/* <ScrollAnimation animateIn="fainIn"> */}
      <Features />
    {/* </ScrollAnimation> */}
>>>>>>> 21150ba2e7b7b8edcd4dcbdf2ababf31547e1851
  </Layout>
)

export default IndexPage;
