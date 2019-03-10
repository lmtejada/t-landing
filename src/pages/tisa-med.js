import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Products from "../components/products/products";
import Plans from "../components/plans/plans";

const TisaMed = () => (
    <Layout>
        <SEO title="TisaMed" />
        <Products />
        <Plans />
        {/* <Link to="/about-us/">Go to page 2</Link> */}
    </Layout>
)

export default TisaMed