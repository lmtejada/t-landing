import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from "../components/layout";
import SEO from "../components/seo";

// import Product from "../components/product/product";
import Plans from "../components/plans/plans";
// import ProductCard from "../components/product/productCard";
import FeaturePanels from "../components/features/featurePanels";

// import image from "../images/medicine.jpeg";


const TisaMed = () => (
    <Layout>
        <SEO title="TisaMed" />

        {/* <Product productTitle="TisaMed">
            <ProductCard
                image={image}
                title="What is Lorem Ipsum?">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <button onClick={redirect} type="button" className="btn btn-primary btn-lg align-self-center">Comenzar</button>
            </ProductCard>
        </Product> */}

        <FeaturePanels page="tisamed" />

        <div className="text-center">
            <h3 className="mt-5 mb-4 text-center">¿Ya estas registrado? </h3>
            <button onClick={redirect} type="button" className="btn btn-primary btn-lg align-self-center mb-4">Ingresar</button>
        </div>

        <hr></hr>

        <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
            <Plans />
        </ScrollAnimation>

    </Layout>
);

const redirect = () => {
    window.open('https://tisamed.tisatechnology.com', '_blank');
};

export default TisaMed