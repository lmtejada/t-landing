import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import "./navigation/navigation.scss";

const Navigation = () => (
    <Navbar>
        <Navbar.Brand href="/">
            <img
                src="src/images/tisa.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
        </Navbar.Brand>
    </Navbar>
)

export default Navigation;