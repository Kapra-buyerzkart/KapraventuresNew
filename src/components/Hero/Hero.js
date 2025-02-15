import React from "react";
import "./Hero.css";
import heroImage from "../../assets/images/banner.png"; // Import your hero image

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1 className="hero-tagline">Where Vision Meets Success</h1>
                <h1 className="hero-sub-tagline">Join Us and Shape the Future</h1>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="Hero" />
            </div>
        </section>
    );
};

export default Hero;
