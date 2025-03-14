import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Leadership from "../../components/Leadership/Leadership";
import Contact from "../../components/Contact/Contact";

const Home = () => {
    const location = useLocation(); // Get current URL

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100); // Delay to allow page rendering
            }
        }
    }, [location]);

    return (
        <div className="home">
            <Hero />
            <div id="about">
                <About />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="leadership">
                <Leadership />
            </div>
            <div id="contact">
                <Contact />
            </div>

            {/* WhatsApp Icon */}
            <a
                href="https://wa.me/9048356555"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-icon"
            >
                <i className="fab fa-whatsapp"></i>
            </a>
        </div>
    );
};

export default Home;
