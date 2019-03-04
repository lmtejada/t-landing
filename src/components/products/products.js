import React from "react";

import Container from 'react-bootstrap/Container';
import ProductCard from "./productCard";

import image from "../../images/medicine.jpeg";
import "./products.scss";

const Products = () => (
    <Container className="products col-sm-12">
        <h1 className="text-center">Nuestros productos</h1>
        <ProductCard
            image={image} title="What is Lorem Ipsum?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <button type="button" className="btn btn-primary btn-lg align-self-center">Conoce más</button>
        </ProductCard>
    </Container>
)

export default Products;