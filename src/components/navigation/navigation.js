import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, navigate } from "gatsby";

import "./navigation.scss";

const Navigation = () => (
    <Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="d-flex justify-content-center">
            <Nav>
                <Nav.Item><Link to="/">Inicio</Link></Nav.Item>
                <NavDropdown title="Productos">
                    <NavDropdown.Item onClick={() => navigate("/tisa-med")}>
                        TisaMed
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigate("/hosting")}>
                        Hosting
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item><Link to="/about-us/">Nosotros</Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Navigation;