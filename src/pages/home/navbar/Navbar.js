import React, { useState } from "react";

import NavbarItem from "./NavbarItem";

import "./Navbar.css";

const dataNavbar = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
  },
];
const Navbar = (props) => {
  const [clicked, setClicked] = useState(true);

  // event tạo border cho navbar có active = true
  const onClickHandler = (e) => {
    e.target.active = true;
  };

  return (
    <div className="home">
      <div className="navbars">
        <div className="head-navbar">
          <p>Booking Website</p>
          <div className="head-button">
            <button className="button">Register</button>
            <button className="button">Login</button>
          </div>
        </div>
        <div className="navbar">
          {/* render các navbar */}
          {dataNavbar.map((el) => (
            <NavbarItem
              onClick={onClickHandler}
              active={el.active}
              icon={el.icon}
              type={el.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
