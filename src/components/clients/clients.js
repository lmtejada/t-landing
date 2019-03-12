import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

import Container from 'react-bootstrap/Container';

import "./clients.scss";
import logo1 from '../../images/sample-logo.jpg';
import logo2 from '../../images/Logo_Plasgara.png';

const Clients = () => (
    <Container className="clients col-sm-12">
        <h1 className="text-center">Nuestros clientes</h1>
        <hr className="divider" />
        <div className="row content d-flex align-items-center justify-content-center">
            <div className="col-sm-12 col-md-4 col-lg-3">
                <ScrollAnimation animateIn="fadeInLeft">
                    <img src={logo1} alt="Logo" />
                </ScrollAnimation>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3">
                <ScrollAnimation animateIn="fadeInRight">
                    <img src={logo2} alt="Logo" />
                </ScrollAnimation>
            </div>
        </div>
    </Container>
)

export default Clients;