import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-container">
                    <img src={logo} alt="Company Logo" className="logo" />
                    <span className="company-name">KAPRA GROUP</span>
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                    <a href="#leaderships" onClick={() => setMenuOpen(false)}>Leaderships</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
