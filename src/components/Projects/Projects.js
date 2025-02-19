import React from "react";
import "./Projects.css";
import kdailyLogo from "../../assets/images/k-daily.png";
import goldLogo from "../../assets/images/k-gold.png";
import webaiLogo from "../../assets/images/k-webai.png";
import sellerzkartLogo from "../../assets/images/sellerzkart.png";


const projects = [
    {
        name: "Kapra Buyerzkart Digital Commerce Pvt Ltd-Kapra Daily",
        description: "Kapra Buyerzkart Digital Commerce Pvt Ltd-Kapra Daily is an innovative e-commerce platform founded in 2023, dedicated to providing customers with a seamless and efficient shopping experience for grocery and daily essentials. Designed to redefine convenience, Kapra Daily delivers essential items within 20 minutes of placing an order, ensuring speed and reliability without compromising on quality.",
        logo: kdailyLogo,
        link: "https://buyerzkart.com",
    },
    {
        name: "Kapra Gold & Diamonds",
        description: "Kapra Gold & Diamonds is a prestigious partnership firm founded in 2024. We are dedicated to offering a perfect fusion of tradition, modern design, and luxury. With an extensive product range, state-of-the-art online shopping facilities, and exciting loyalty programs, the brand aims to deliver unparalleled value and convenience to customers worldwide.",
        logo: goldLogo,
        link: "https://www.kapragoldanddiamonds.com",
    },
    {
        name: "Kapra WebAI Makers Pvt Ltd",
        description: "Kapra WebAI is a Technology Solutions Service Provider based in Kochi, Kerala. It is a dynamic company founded in 2024, specializing in Web developments, Mobile App developments, and AI Solutions. We are committed to delivering innovative, reliable, and scalable digital solutions tailored to our client’s needs.",
        logo: webaiLogo,
        link: "https://kaprawebai.com",
    },
    {
        name: "Sellerzkart Digital Commerce Pvt Ltd",
        description: "Sellerzkart is a trailblazing direct selling company that has revolutionized the industry by offering a wide array of premium-quality products under multiple specialized brands. Founded on March 21, 2022, in Kochi, Kerala, the company serves as a hub for its operations across the state and beyond.",
        logo: sellerzkartLogo,
        link: "https://sellerzkart.com",
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>Our Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} className="project-card">
                        <div className="project-logo-container">
                            <img src={project.logo} alt={project.name} className="project-logo" />
                        </div>
                        <div className="project-name">
                            <h3>{project.name}</h3>
                        </div>
                        <div className="project-description">
                            <p>{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;

