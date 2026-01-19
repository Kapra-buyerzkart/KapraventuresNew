// TeamGallery.js
import React, { useEffect } from "react";
import "./Team.css";
import Employees from "../../constants/Employees";
import PersonImage from "../../assets/images/Employees/person.png";
import { useLocation } from "react-router-dom";

const teamMembers = [
  {
    name: "Peter S",
    designation: "Human Resources Manager",
    photo: Employees.Person,
    company: "Kapra Group"
  },
  {
    name: "Rahul VR",
    designation: "Finance Manager",
    photo: Employees.Rahul,
    company: "Sellerzkart"
  },
  {
    name: "Binu Chandran",
    designation: "Jewellery Manager",
    photo: Employees.Person,
    company: "Kapra Gold and Diamonds"
  },
  {
    name: "Krishna Moorthy PS",
    designation: "Accounts Manager",
    photo: Employees.Moorthy,
    company: "Kapra Daily"
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
  // {
  //   name: "Dhanyan PV",
  //   designation: "Vendor Manager",
  //   photo: Employees.Dhanyan,
  //   company: "Kapra Daily"
  // },
  {
    name: "Jithin KM",
    designation: "Software Engineer",
    photo: Employees.Jithin,
    company: "Kapra Web AI Makers"
  },
  {
    name: "Saru Darai",
    designation: "Assistant Vendor Manager",
    photo: Employees.Saru,
    company: "Kapra Daily"
  },
  {
    name: "Saneesh P",
    designation: "Data Operation Assistant Manager",
    photo: Employees.Saneesh,
    company: "Kapra Daily"
  },
  {
    name: "Nisha Santhosh",
    designation: "Assistant Store Manager",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  {
    name: "Saurav Rajendran",
    designation: "Assistant Store Manager",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  // {
  //   name: "Suneer M",
  //   designation: "Marketing Officer",
  //   photo: Employees.Suneer,
  //   company: "Kapra Daily"
  // },
  {
    name: "Aleena KS",
    designation: "Accountant",
    photo: Employees.Aleena,
    company: "Sellerzkart"
  },
  {
    name: "Anu John",
    designation: "Accountant",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  {
    name: "Unni Thilakan",
    designation: "Store Supervisor",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  {
    name: "Muhammed Riswan MJ",
    designation: "Store Supervisor",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  {
    name: "Rittamol Joseph",
    designation: "Digital Marketing Specialist",
    photo: Employees.Person,
    company: "Kapra Web AI Makers"
  },
  {
    name: "Navya Das MK",
    designation: "Graphics Designer",
    photo: Employees.Person,
    company: "Kapra Web AI Makers"
  },
  // {
  //   name: "Anila KS",
  //   designation: "Data Entry Executive",
  //   photo: Employees.Anila,
  //   company: "Kapra Daily"
  // },
  {
    name: "Mariya Tomy",
    designation: "Data Entry Executive",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  {
    name: "Fransa Mol TF",
    designation: "Data Entry Executive",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  {
    name: "Indu C",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  {
    name: "Gouthamy Gopakumar",
    designation: "Store Executive",
    photo: Employees.Gouthamy,
    company: "Kapra Daily"
  },
  {
    name: "Honeymol PK",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  {
    name: "Abinanth Suresh",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  {
    name: "Maria Sandra",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  {
    name: "Akshay PM",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  // {
  //   name: "Akshay PM",
  //   designation: "Store Executive",
  //   photo: Employees.Person,
  //   company: "Kapra Daily"
  // },
  {
    name: "Abhil EM",
    designation: "Delivery Executive",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  {
    name: "Michael KJ",
    designation: "Delivery Executive",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  {
    name: "Sheeba Paul",
    designation: "House Keeping",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  {
    name: "Sindhu KS",
    designation: "House Keeping",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  // {
  //   name: "Aadhil Sameer",
  //   designation: "Store Executive",
  //   photo: Employees.Aadhil,
  //   company: "Kapra Daily"
  // },
  // {
  //   name: "Nimmy John",
  //   designation: "Front Desk Executive",
  //   photo: Employees.Nimmy,
  //   company: "Kapra Daily"
  // },
  // {
  //   name: "Muhammad Aslam PA",
  //   designation: "Junior Data Entry Operator",
  //   photo: Employees.Aslam,
  //   company: "Kapra Daily"
  // },
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
