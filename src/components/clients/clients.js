import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

import Container from 'react-bootstrap/Container';
import Title from "../title/title";

import logo1 from '../../images/sample-logo.jpg';
import logo2 from '../../images/Logo_Plasgara.png';

import "./clients.scss";

const Clients = () => (
    <Container className="clients col-sm-12">
        <Title title="Nuestros clientes" />
        <div className="row content d-flex align-items-center justify-content-center">
            <div className="col-sm-12 col-md-4 col-lg-3 d-flex align-items-center justify-content-center">
                <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
                    <img src={logo1} alt="Logo" />
                </ScrollAnimation>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3 d-flex align-items-center justify-content-center">
                <ScrollAnimation animateIn="fadeInRight" animateOnce="true">
                    <img src={logo2} alt="Logo" />
                </ScrollAnimation>
            </div>
        </div>
    </Container>
)

export default Clients;