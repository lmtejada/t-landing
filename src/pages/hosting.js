import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Product from "../components/product/product";
import ProductCard from "../components/product/productCard";

import image from "../images/hosting.jpeg";

const Hosting = () => (
    <Layout>
        <SEO title="Hosting" />
        <Product productTitle="Hosting">
            <ProductCard
                image={image}
                title="Servicio de alojamiento para páginas Web">
                Si cuentas con un dominio, te ofrecemos el diseño y hosting de tu página.
                <br></br>
                Cuentanos lo que quieres y déjalo en nuestras manos.
                <button onClick={() => window.location.href = 'mailto:em@i.l'} type="button" className="btn btn-primary btn-lg align-self-center">Comenzar</button>
            </ProductCard>
        </Product>
    </Layout>
)

export default Hosting