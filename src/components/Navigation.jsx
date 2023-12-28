// import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav-container">
        <Logo />
        <ul>
          <li>
            <NavLink to="/" className={(nav) => (nav.isActive ? "is-active" : "")}>
              Acceuil
            </NavLink>
          </li>
          <li>
            <NavLink to="/equipe" className={(nav) => (nav.isActive ? "is-active" : "")}>
              Equipe
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
