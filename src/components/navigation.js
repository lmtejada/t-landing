import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import { Link } from "gatsby";

import "./navigation/navigation.scss";
import logo from "../images/tisa.png"

const Navigation = () => (
    <Navbar>
        <Navbar.Brand href="/">
            <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Tisa logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
            <Nav className="justify-content-center">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Link</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
        
export default Navigation;