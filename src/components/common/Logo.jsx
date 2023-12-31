// import React from "react";
import { NavLink } from "react-router-dom";

const Logo = ({ navFixed }) => {
  return (
    <div className="logo-container">
      <div className="logo-text-container">
        <NavLink to="/">
          <p>Micro Creche</p>
          <h2>PITAYA</h2>
        </NavLink>
      </div>
      <div className={`logo-img-container ${navFixed && "on-scroll"}`}>
        <NavLink to="/">
          <img src="./img/logo2.png" alt="pitaya-logo2" />
        </NavLink>
      </div>
    </div>
  );
};

export default Logo;
