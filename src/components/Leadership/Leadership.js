import React from "react";
import "./Leadership.css";
import cmdImage from "../../assets/images/cmd.webp"; // Replace with actual CMD image
import ceoImage from "../../assets/images/ceo.webp"; // Replace with actual CEO image

const Leadership = () => {
    return (
        <section id="leadership" className="leadership">
            <h2>Leadership</h2>
            <p className="leadership-text">
                At KAPRA, we excel by blending business and technology, leveraging innovation and software to transform the trade industry. Our goal is to enrich lives and empower financial independence for all. Since our establishment in 2022, our journey has been guided by an unwavering pursuit of excellence, a collaborative mindset, and a dedication to innovation. Together, we aim to enhance consumer satisfaction and foster lasting prosperity.
                <br />
                <br />
                We promise to remain a reliable, results-oriented team, committed to embracing progress while staying true to our core values.
            </p>
            <div className="leaders-container">
                <div className="leader-card">
                    <img src={cmdImage} alt="Kannan Thilakan - CMD" className="leader-image" />
                    <h3>Kannan Thilakan</h3>
                    <p>Chairman & Managing Director (CMD)</p>
                </div>
                <div className="leader-card">
                    <img src={ceoImage} alt="Prasob Das - CEO" className="leader-image" />
                    <h3>Prasob Das</h3>
                    <p>Chief Executive Officer (CEO)</p>
                </div>
            </div>
        </section>
    );
};

export default Leadership;
