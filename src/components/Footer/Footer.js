import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaPinterest, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h3>KAPRA HIGHNESS VENTURES LIMITED</h3>
                </div>

                <div className="footer-socials">
                    <a href="https://www.instagram.com/kapraventures" target="_blank" rel="noreferrer">
                        <FaInstagram size={25} />
                    </a>
                    <a href="https://www.facebook.com/kaprahighnessventures" target="_blank" rel="noreferrer">
                        <FaFacebook size={25} />
                    </a>
                    <a href="https://www.youtube.com/@KapraHighnessVentures" target="_blank" rel="noreferrer">
                        <FaYoutube size={25} />
                    </a>
                    <a href="https://www.pinterest.com/KapraHighnessVentures" target="_blank" rel="noreferrer">
                        <FaPinterest size={25} />
                    </a>
                    <a href="https://x.com/KPHVentures" target="_blank" rel="noreferrer">
                        <FaTwitter size={25} />
                    </a>
                </div>

                <div className="footer-contact">
                    <div className="footer-address">
                        <FaMapMarkerAlt size={20} />
                        <p>2nd floor, Nandhanam Tower, Kaniyapilly Rd, Chakkaraparambu, Vennala, Kochi, Ernakulam, Kerala 682028</p>
                    </div>
                    <div className="footer-email">
                        <FaEnvelope size={20} />
                        <a href="mailto:info@kapragroup.in">info@kapragroup.in</a>
                    </div>
                </div>
            </div>
            <p>© 2023 KAPRA HIGHNESS VENTURES LTD. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
