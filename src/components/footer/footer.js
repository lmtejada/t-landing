import React from "react";

import "./footer.scss";

import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => (
    <footer className="footer" align="center">
        <div className="font-weight-bold">
            © {new Date().getFullYear()} Tisa Technology
        </div>
        <div className="mt-3">
            <a href="https://www.google.com.co">
                <FaFacebook className="facebook-icon" />
            </a>
            <a href="https://www.google.com.co">
                <FaYoutube className="youtube-icon" />
            </a>
            <a href="https://www.google.com.co">
                <FaTwitter className="twitter-icon" />
            </a>
        </div>
    </footer>
)

export default Footer;