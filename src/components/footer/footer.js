import React from "react";

import "./footer.scss";

import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => (
    <footer className="footer" align="center">
        <div className="font-weight-bold">
            © {new Date().getFullYear()} Tisa Technology
        </div>
        <div className="mt-3">
            <a href="https://www.google.com.co">
                <FaFacebook />
            </a>
            <a href="https://www.google.com.co">
                <FaYoutube />
            </a>
            <a href="https://www.google.com.co">
                <FaTwitter />
            </a>
            <a href="https://www.google.com.co">
                <FaInstagram />
            </a>
            <a href="https://www.google.com.co">
                <FaLinkedin />
            </a>
        </div>
    </footer>
)

export default Footer;