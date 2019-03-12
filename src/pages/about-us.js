import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from "../components/layout";
import SEO from "../components/seo";

import Profiles from "../components/profiles/profiles";
import Clients from "../components/clients/clients";

const AboutUs = () => (
  <Layout>
    <SEO title="About us" />

    <Profiles />

    {/* <ScrollAnimation animateIn="fadeInLeft"> */}
    <Clients />
    {/* </ScrollAnimation> */}

  </Layout>
)

export default AboutUs