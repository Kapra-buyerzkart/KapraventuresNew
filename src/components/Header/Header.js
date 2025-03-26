import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (id) => {
        setMenuOpen(false);
        if (location.pathname !== "/") {
            navigate(`/#${id}`); // Navigate to Home with hash
        } else {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
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
                    <a onClick={() => scrollToSection("about")}>About</a>
                    <a onClick={() => scrollToSection("projects")}>Projects</a>
                    <a onClick={() => scrollToSection("leadership")}>Leadership</a>
                    <a onClick={() => scrollToSection("contact")}>Contact</a>
                    <Link to="/team" onClick={() => setMenuOpen(false)}>Team</Link>
                    <Link to="/gallery-titles" onClick={() => setMenuOpen(false)}>Gallery</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
