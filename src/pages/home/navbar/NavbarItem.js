import React from "react";
import "./NavbarItem.css";

const NavbarItem = (props) => {
  let isActive = "";

  // Tạo class active
  if (props.active) {
    isActive = "active";
  }
  return (
    <div className={`navbar-item ${isActive}`}>
      <i className={`fa ${props.icon}`}></i>
      <p>{props.type}</p>
    </div>
  );
};

export default NavbarItem;
