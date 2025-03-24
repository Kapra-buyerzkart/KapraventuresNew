// TeamGallery.js
import React, { useEffect } from "react";
import "./Team.css";
import Employees from "../../constants/Employees";
import PersonImage from "../../assets/images/Employees/person.png";
import { useLocation } from "react-router-dom";

const teamMembers = [
  // {
  //   name: "Anulata Verma",
  //   designation: "Human Resources Manager",
  //   photo: PersonImage,
  //   company: "Kapra Daily"
  // },
  {
    name: "Kiran Joseph",
    designation: "Operation Manager",
    photo: Employees.Kiran,
    company: "Kapra Daily"
  },
  {
    name: "Rahul VR",
    designation: "Senior Account Manager",
    photo: Employees.Rahul,
    company: "Kapra Daily"
  },
  {
    name: "Krishna Moorthy PS",
    designation: "Account Manager Electronics",
    photo: Employees.Moorthy,
    company: "Kapra Digital"
  },
  // {
  //   name: "Remy MS",
  //   designation: "Operation Manager-Hub",
  //   photo: Employees.Remya,
  //   company: "Sellerzkart"
  // },
  {
    name: "Sunil PC",
    designation: "Store Manager",
    photo: Employees.Sunil,
    company: "Kapra Daily"
  },
  {
    name: "Dhanyan PV",
    designation: "Vendor Manager",
    photo: Employees.Dhanyan,
    company: "Kapra Daily"
  },
  {
    name: "Rohit PJ",
    designation: "Assistant Store Manager",
    photo: Employees.Rohit,
    company: "Kapra Daily"
  },
  {
    name: "Nisha Santhosh",
    designation: "Assistant Store Manager",
    photo: Employees.Person,
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
    designation: "Marketing Officer",
    photo: Employees.Suneer,
    company: "Kapra Daily"
  },
  {
    name: "Jithin KM",
    designation: "Software Developer",
    photo: Employees.Jithin,
    company: "Kapra Web AI"
  },
  {
    name: "Vijin TK",
    designation: "Graphic Designer",
    photo: Employees.Vijin,
    company: "Kapra Web AI"
  },
  {
    name: "Saneesh P",
    designation: "Data Entry Operator",
    photo: Employees.Saneesh,
    company: "Kapra Web AI"
  },
  {
    name: "Nandhu S",
    designation: "Warehouse Assistant",
    photo: Employees.Nandhu,
    company: "Sellerzkart"
  },
  {
    name: "Alex Ajo",
    designation: "Store Supervisor",
    photo: Employees.Alex,
    company: "Kapra Daily"
  },
  {
    name: "Gouthamy Gopakumar",
    designation: "Store Executive",
    photo: Employees.Gouthamy,
    company: "Kapra Daily"
  },
  {
    name: "Aadhil Sameer",
    designation: "Store Executive",
    photo: Employees.Aadhil,
    company: "Kapra Daily"
  },
  {
    name: "Aleena KS",
    designation: "Accounts executive",
    photo: Employees.Aleena,
    company: "Kapra Daily"
  },
  {
    name: "Nimmy John",
    designation: "Front Desk Executive",
    photo: Employees.Nimmy,
    company: "Kapra Daily"
  },
  {
    name: "Muhammad Aslam PA",
    designation: "Junior Data Entry Operator",
    photo: Employees.Aslam,
    company: "Kapra Daily"
  },
  {
    name: "Anila KS",
    designation: "Junior Data Entry Operator",
    photo: Employees.Anila,
    company: "Kapra Daily"
  },
  {
    name: "Indu C",
    designation: "Receiver",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  {
    name: "Anil Kumar K",
    designation: "Picking & Packing Staff",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  {
    name: "Anjali R",
    designation: "Picking & Packing Staff",
    photo: Employees.Person,
    company: "Kapra Daily"
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
