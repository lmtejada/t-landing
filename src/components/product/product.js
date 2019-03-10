import React from "react";

import Container from 'react-bootstrap/Container';

import "./product.scss";

const Product = ({ productTitle, children }) => (
    <Container className="product col-sm-12">
        <h1 className="text-center">{productTitle}</h1>
        <hr className="divider" />
        {children}
    </Container>
)

export default Product;