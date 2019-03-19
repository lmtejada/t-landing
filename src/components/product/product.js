import React from "react";

import Container from 'react-bootstrap/Container';
import Title from "../title/title";

import "./product.scss";

const Product = ({ productTitle, children }) => (
    <Container className="product col-sm-12">
        <Title title={productTitle} />
        {children}
    </Container>
)

export default Product;