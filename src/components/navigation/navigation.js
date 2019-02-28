import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "gatsby";

import "./navigation.scss";

const Navigation = () => (
    <Navbar>
        {/* <Navbar.Brand href="/">
            <img
                src={logo}
                width="96"
                height="34"
                className="d-inline-block align-top"
                alt="Tisa logo"
            />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="d-flex justify-content-center">
            <Nav>
                {/* <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/about-us">Sobre nosotros</Nav.Link> */}
                <Nav.Item><Link to="/">Inicio</Link></Nav.Item>
                <Nav.Item><Link to="/about-us/">Acerca de nosotros</Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
        
export default Navigation;