import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Product from "../components/product/product";
import ProductCard from "../components/product/productCard";

import image from "../images/medicine.jpeg";

const Hosting = () => (
    <Layout>
        <SEO title="Hosting" />
        <Product productTitle="Hosting">
            <ProductCard
                image={image}
                title="Hosting">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <button type="button" className="btn btn-primary btn-lg align-self-center">Conoce más</button>
            </ProductCard>
        </Product>
    </Layout>
)

export default Hosting