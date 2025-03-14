// TeamGallery.js
import React from "react";
import "./Gallery.css";
import MSD from "../../assets/images/Employees/MSD.webp";
import  YUVI from "../../assets/images/Employees/YUVI.jpg" // Replace with actual CMD image
import monkey from "../../assets/images/Employees/monkey.jpg"

const teamMembers = [
  {
    name: "John Doe",
    designation: "Software Engineer",
    photo: MSD,
  },
  {
    name: "Jane Smith",
    designation: "Product Manager",
    photo: YUVI,
  },
  {
    name: "John Doe",
    designation: "Software Engineer",
    photo: MSD,
  },
  {
    name: "Jane Smith",
    designation: "Product Manager",
    photo: YUVI,
  },
  {
    name: "John Doe",
    designation: "Software Engineer",
    photo: MSD,
  },
  {
    name: "Jane Smith",
    designation: "Product Manager",
    photo: YUVI,
  },
  {
    name: "John Doe",
    designation: "Software Engineer",
    photo: MSD,
  },
  {
    name: "Jane Smith",
    designation: "Product Manager",
    photo: YUVI,
  },
  {
    name: "John Doe",
    designation: "Software Engineer",
    photo: MSD,
  },
  {
    name: "Jane Smith",
    designation: "Product Manager",
    photo: YUVI,
  },
  {
    name: "John Doe",
    designation: "Software Engineer",
    photo: MSD,
  },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Team Members</h2>
      <div className="gallery-row">
        {teamMembers.map((member, index) => (
          <div key={index} className="gallery-card">
            <img src={member.photo} alt={member.name} className="gallery-image" />
            <h3 className="gallery-name">{member.name}</h3>
            <p className="gallery-designation">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
