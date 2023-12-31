import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../common/Logo";

const Navigation = () => {
  const [navHeight, setNavHeight] = React.useState(0);
  const [navFixed, setNavFixed] = React.useState(false);

  const navigation = document.getElementsByClassName("navigation");

  useEffect(() => {
    setNavHeight(navigation[0].offsetHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > navHeight) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    });
  }, []);

  return (
    <div className={`navigation ${navFixed && "fixed-navigation"}`}>
      <div className="nav-container">
        <Logo navFixed={navFixed} />
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
          <li>
            <NavLink to="/nos-valeurs" className={(nav) => (nav.isActive ? "is-active" : "")}>
              Nos valeurs
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
