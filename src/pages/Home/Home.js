import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <About />
            <Projects />
            {/* WhatsApp Icon */}
            <a
                href="https://wa.me/7994396662" // Replace with your WhatsApp number
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
