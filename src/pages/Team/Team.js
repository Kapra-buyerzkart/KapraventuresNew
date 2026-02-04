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
    photo: Employees.Hr,
    company: "Kapra Group"
  },
  {
    name: "Rahul VR",
    designation: "Finance Manager",
    photo: Employees.Rahul,
    company: "Sellerzkart"
  },
  {
    name: "Miju KV",
    designation: "Senior Operations Manager",
    photo: Employees.Miju,
    company: "Kapra Daily - HO"
  },
  {
    name: "Sajil Prasad",
    designation: "Chief Technology Officer",
    photo: Employees.Sajil,
    company: "Kapra Web AI Makers"
  },
  {
    name: "Unni Thilakan",
    designation: "Operations Head",
    photo: Employees.Person,
    company: "Kapra Daily - HO"
  },
  {
    name: "Sunil PC",
    designation: "Store Manager",
    photo: Employees.Sunil,
    company: "Kapra Daily - Chalakudy"
  },
  {
    name: "Aju M",
    designation: "Store Manager",
    photo: Employees.Person,
    company: "Kapra Daily - Tirur"
  },
  {
    name: "Manoj Kumar",
    designation: "Store Manager",
    photo: Employees.Person,
    company: "Kapra Daily - Thripunithura"
  },
  {
    name: "Muhammad Siraj",
    designation: "Store Manager",
    photo: Employees.Person,
    company: "Kapra Daily - Kanichukulangara"
  },
  {
    name: "Amal Babu",
    designation: "Assistant Store Manager",
    photo: Employees.Person,
    company: "Kapra Daily - Kanichukulangara"
  },
  {
    name: "Amal Aji",
    designation: "Assistant Store Manager",
    photo: Employees.Person,
    company: "Kapra Daily - Thripunithura"
  },
  {
    name: "Vinayan",
    designation: "Assistant Showroom Manager",
    photo: Employees.Person,
    company: "Kapra Gold and Diamonds - Tirur"
  },
  {
    name: "Aleena KS",
    designation: "Accountant",
    photo: Employees.Aleena,
    company: "Sellerzkart"
  },
  {
    name: "Anu John",
    designation: "Accountant",
    photo: Employees.Anu,
    company: "Kapra Daily - HO"
  },
  {
    name: "Kiran KU",
    designation: "Store Supervisor",
    photo: Employees.Person,
    company: "Kapra Daily - Tirur"
  },
  {
    name: "Rijin PJ",
    designation: "Store Supervisor",
    photo: Employees.Person,
    company: "Kapra Daily - Kanichukulangara"
  },
  {
    name: "Muhammed Riswan MJ",
    designation: "Store Supervisor",
    photo: Employees.Person,
    company: "Kapra Daily - Chalakudy"
  },
  {
    name: "Sumith Subramaniyan",
    designation: "Construction Supervisor",
    photo: Employees.Sumith,
    company: "Kapra Daily - HO"
  },
  {
    name: "Amjith",
    designation: "Warehouse Incharge",
    photo: Employees.Person,
    company: "Sellerzkart"
  },
  {
    name: "Atul",
    designation: "Business Admin Manager",
    photo: Employees.Person,
    company: "Kapra Daily - HO"
  },
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
    company: "Kapra Daily - HO"
  },
  {
    name: "Aswathi Rajappan",
    designation: "Accountant Executive",
    photo: Employees.Person,
    company: "Kapra Gold and Diamonds - Thripunithura"
  },
  {
    name: "Shuhaib Aslam",
    designation: "Accountant Executive",
    photo: Employees.Person,
    company: "Kapra Gold and Diamonds - Tirur"
  },
  {
    name: "Muhammad Rahil",
    designation: "UI/UX Designer",
    photo: Employees.Rahil,
    company: "Kapra Web AI Makers"
  },
  {
    name: "Navya Das MK",
    designation: "Graphics Designer",
    photo: Employees.Navya,
    company: "Kapra Web AI Makers"
  },
  {
    name: "Rittamol Joseph",
    designation: "Digital Marketing Specialist",
    photo: Employees.Ritta,
    company: "Kapra Web AI Makers"
  },
  {
    name: "Vipin Kumar",
    designation: "Sales",
    photo: Employees.Person,
    company: "Kapra Gold and Diamonds - Thripunithura"
  },
  {
    name: "Shybi",
    designation: "Sales",
    photo: Employees.Person,
    company: "Kapra Gold and Diamonds - Thripunithura"
  },
  {
    name: "Niya Paul",
    designation: "Warehouse Executive",
    photo: Employees.Niya,
    company: "Kapra Daily - HO"
  },
  {
    name: "Saneesh P",
    designation: "Data Entry Operator Head",
    photo: Employees.Saneesh,
    company: "Kapra Daily - HO"
  },
  {
    name: "Fransa Mol TF",
    designation: "Data Entry Operator",
    photo: Employees.Fransa,
    company: "Kapra Daily - HO"
  },
  {
    name: "Manju MM",
    designation: "Data Entry Operator",
    photo: Employees.Manju,
    company: "Kapra Daily - HO"
  },
  {
    name: "Mariya Tomy",
    designation: "Data Entry Operator",
    photo: Employees.Mariya,
    company: "Kapra Daily - HO"
  },
  {
    name: "Vipin M",
    designation: "Data Entry Operator",
    photo: Employees.Person,
    company: "Kapra Daily - Tirur"
  },
  {
    name: "Musammil M",
    designation: "Data Entry Operator",
    photo: Employees.Person,
    company: "Kapra Daily - Kanichukulangara"
  },
  {
    name: "Ajitha N",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Tirur"
  },
  {
    name: "Ajmal",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Tirur"
  },
  {
    name: "Aleena Johnson",
    designation: "Store Executive - Chalakudy",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  {
    name: "Anandhu G",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Kanichukulangara"
  },
  {
    name: "Ashik Baiju",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Chalakudy"
  },
  {
    name: "Abhinand Suresh",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Thripunithura"
  },
  {
    name: "Bincy NS",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Kanichukulangara"
  },
  {
    name: "Chinchu P",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Kanichukulangara"
  },
  {
    name: "Haleemath Sahadiya KP",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Tirur"
  },
  {
    name: "Jishnu",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Tirur"
  },
  {
    name: "Jose PT",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Chalakudy"
  },
  {
    name: "Lekha N",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Kanichukulangara"
  },
  {
    name: "Malini Anil",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Chalakudy"
  },
  {
    name: "Maya M",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Kanichukulangara"
  },
  {
    name: "Muhammed Farhan",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Tirur"
  },
  {
    name: "Malavika",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Thripunithura"
  },
  {
    name: "Neeraj Babu",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Thripunithura"
  },
  {
    name: "Rahul VR",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Thripunithura"
  },
  {
    name: "Rasheeda VP",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Tirur"
  },
  {
    name: "Saranya Babu",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Kanichukulangara"
  },
  {
    name: "Shyma Mathiew",
    designation: "Store Executive - Chalakudy",
    photo: Employees.Person,
    company: "Kapra Daily"
  },
  {
    name: "Sreeja PP",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Tirur"
  },
  {
    name: "Sreenandan L",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Kanichukulangara"
  },
  {
    name: "Subair",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Tirur"
  },
  {
    name: "Sumitha P",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Tirur"
  },
  {
    name: "Suraj Suresh",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Kanichukulangara"
  },
  {
    name: "Usha M",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Kanichukulangara"
  },
  {
    name: "Vijina CV",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Tirur"
  },
  {
    name: "Raju ER",
    designation: "Delivery & Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Chalakudy"
  },
  // {
  //   name: "Mohandas",
  //   designation: "Product Advisor",
  //   photo: Employees.Mohandas,
  //   company: "Sellerzkart"
  // },
  {
    name: "Mubeena Sherin CK",
    designation: "Data Entry Operator",
    photo: Employees.Person,
    company: "Kapra Daily - Tirur"
  },
  {
    name: "Indu C Nair",
    designation: "Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Vennala"
  },
  {
    name: "Shari",
    designation: "Reception",
    photo: Employees.Person,
    company: "Kapra Gold and Diamonds - Thripunithura"
  },
  {
    name: "Suresh Babu",
    designation: "Smith",
    photo: Employees.Person,
    company: "Kapra Gold and Diamonds - Thripunithura"
  },
  {
    name: "Safna",
    designation: "Office Assistant",
    photo: Employees.Person,
    company: "Kapra Gold and Diamonds - Tirur"
  },
  {
    name: "Surya",
    designation: "Sales Executive",
    photo: Employees.Person,
    company: "Kapra Gold and Diamonds - Tirur"
  },
  {
    name: "Mini Selvan",
    designation: "House Keeping & Store Executive",
    photo: Employees.Person,
    company: "Kapra Gold and Diamonds - Tirur"
  },
  {
    name: "Ajay Pradeesh",
    designation: "House Keeping",
    photo: Employees.Person,
    company: "Kapra Daily - Kanichukulangara"
  },
  {
    name: "Ambily VA",
    designation: "House Keeping",
    photo: Employees.Person,
    company: "Kapra Daily - Kanichukulangara"
  },
  {
    name: "Smitha K",
    designation: "House Keeping",
    photo: Employees.Person,
    company: "Kapra Daily - Tirur"
  },
  {
    name: "Sudha Kumari KV",
    designation: "House Keeping",
    photo: Employees.Person,
    company: "Kapra Daily - Tirur"
  },
  {
    name: "Saritha Prasad",
    designation: "Cleaning Staff & Store Executive",
    photo: Employees.Person,
    company: "Kapra Daily - Tirur"
  },
  {
    name: "Sheeba Paul",
    designation: "House Keeping",
    photo: Employees.Sheeba,
    company: "Kapra Daily - HO"
  },
  {
    name: "Sudha",
    designation: "House Keeping",
    photo: Employees.Person,
    company: "Kapra Gold and Diamonds - Tirur"
  },
  {
    name: "Manju",
    designation: "Cleaning",
    photo: Employees.Person,
    company: "Kapra Gold and Diamonds - Thripunithura"
  },
  // {
  //   name: "Akshay PM",
  //   designation: "Store Executive",
  //   photo: Employees.Person,
  //   company: "Kapra Daily"
  // },
  // {
  //   name: "Abhil EM",
  //   designation: "Delivery Executive",
  //   photo: Employees.Person,
  //   company: "Kapra Daily"
  // },
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
            <div className="team-image-wrapper">
              <img src={member.photo} alt={member.name} className="team-image" />
            </div>
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
