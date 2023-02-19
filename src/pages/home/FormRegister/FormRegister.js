import React from "react";

import "./FormRegister.css";
const FormRegister = () => {
  return (
    <div className="form-register">
      <h1 className="form-title">Save time, save money!</h1>
      <p className="form-text">Sign up and we'll send the best deals to you</p>
      <form className="form-input">
        <input placeholder="Your Email" type="text"></input>
        <button className="form-button">Subcribe</button>
      </form>
    </div>
  );
};

export default FormRegister;
