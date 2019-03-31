import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Profiles from "../components/profiles/profiles";
import Clients from "../components/clients/clients";

const AboutUs = () => (
  <Layout>
    <SEO title="About us" />
    <Profiles />
    {/* <Clients /> */}
  </Layout>
)

export default AboutUs