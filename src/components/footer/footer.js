import React from "react";

import "./footer.scss";

import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => (
    <footer className="footer" align="center">
        <div className="font-weight-bold">
            © {new Date().getFullYear()} Tisa Technology
        </div>
        <div className="mt-3">
            <a href="https://www.facebook.com/TisaTechnology" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
            </a>
            <a href="https://www.youtube.com/channel/UCLf_kjdvMHWj8AP4NJH3vSA" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
            </a>
            <a href="https://twitter.com/tisaTechnology" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </a>
            <a href="https://instagram.com/tisatechnology" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/tisatechnology" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="mailto:comercial@tisatechnology.com">
                <MdEmail />
            </a>
        </div>
    </footer>
)

export default Footer;