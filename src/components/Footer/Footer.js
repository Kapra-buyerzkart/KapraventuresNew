import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h3>KAPRA GROUP PVT LTD</h3>
                </div>

                <div className="footer-socials">
                    <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noreferrer">
                        <FaInstagram size={25} />
                    </a>
                    <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noreferrer">
                        <FaFacebook size={25} />
                    </a>
                    <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noreferrer">
                        <FaYoutube size={25} />
                    </a>
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                        <FaLinkedin size={25} />
                    </a>
                    <a href="https://www.pinterest.com/yourprofile" target="_blank" rel="noreferrer">
                        <FaPinterest size={25} />
                    </a>
                    <a href="https://x.com/yourprofile" target="_blank" rel="noreferrer">
                        <FaTwitter size={25} />
                    </a>
                </div>
            </div>
            <p>© 2023 KAPRA GROUP PVT LTD. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
