import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

import Container from 'react-bootstrap/Container';

import "./title.scss";

const Title = ({ title }) => (
    <Container className="title col-sm-12">
        <ScrollAnimation animateIn="pulse" animateOnce={true}>
            <h1 className="text-center">{title}</h1>
            <hr className="divider" />
        </ScrollAnimation>
    </Container>
)

export default Title;