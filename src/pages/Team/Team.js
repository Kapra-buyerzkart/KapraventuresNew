// TeamGallery.js
import React, { useEffect } from "react";
import "./Team.css";
import Employees from "../../constants/Employees";
import PersonImage from "../../assets/images/Employees/person.png";
import { useLocation } from "react-router-dom";

const teamMembers = [
  {
    name: "Anulata Verma",
    designation: "Human Resources Manager",
    photo: PersonImage,
    company: "Kapra Daily"
  },
  {
    name: "Kiran Joseph",
    designation: "Operation Manager",
    photo: Employees.Kiran,
    company: "Kapra Daily"
  },
  {
    name: "Rahul VR",
    designation: "Accounts Manager",
    photo: Employees.Rahul,
    company: "Kapra Daily"
  },
  {
    name: "Krishna Moorthy PS",
    designation: "Accounts Manager",
    photo: Employees.Moorthy,
    company: "Kapra Daily"
  },
  {
    name: "Dhanyan PV",
    designation: "Vendor Manager",
    photo: Employees.Dhanyan,
    company: "Kapra Daily"
  },
  {
    name: "Saru Darai",
    designation: "Assistant Vendor Manager",
    photo: Employees.Saru,
    company: "Kapra Daily"
  },
  {
    name: "Suneer M",
    designation: "Marketing Associate",
    photo: Employees.Suneer,
    company: "Kapra Daily"
  },
  {
    name: "Vijin TK",
    designation: "Graphic Designer",
    photo: Employees.Vijin,
    company: "Kapra Web AI"
  },
  {
    name: "Aleena KS",
    designation: "Accounts executive",
    photo: Employees.Aleena,
    company: "Kapra Daily"
  },
  {
    name: "Anila KS",
    designation: "Junior Data Entry Operator",
    photo: Employees.Anila,
    company: "Kapra Daily"
  },
  {
    name: "Jithin KM",
    designation: "Software Developer",
    photo: Employees.Jithin,
    company: "Kapra Web AI"
  },
  // {
  //   name: "Rahul VR",
  //   designation: "Software Engineer",
  //   photo: Employees.Rahul,
  //   company: "Kapra Daily"
  // },
  // {
  //   name: "Saru Darai",
  //   designation: "Assistant Vendor Manager",
  //   photo: Employees.Saru,
  //   company: "Kapra Daily"
  // }

];

const Team = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="team-container">
      <h2 className="team-title">Team Members</h2>
      <div className="team-row">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.photo} alt={PersonImage} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-designation">{member.designation}</p>
            <p className="team-designation">{member.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
