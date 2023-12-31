import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  // GERE LE SCROLL POUR LA NAVIGATION
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = () => {
    const navBar = document.querySelector(".nav-wrapper");
    if (window.scrollY > navBar.offsetHeight / 2) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // MOBILE NAVIGATION
  const [navWidth, setNavWidth] = React.useState(window.innerWidth);
  const [onMobile, setOnMobile] = React.useState(false);
  const [isMobileNavOpen, SetisMobileNavOpen] = React.useState(false);

  // MET A JOUR LA WIDTH DE LA NAVIGATION
  const handleResize = () => {
    setNavWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    navWidth < 990 ? setOnMobile(true) : setOnMobile(false);
    console.log("on mobile ? " + onMobile);
  }, [navWidth]);

  const toogleMobileNav = () => {
    SetisMobileNavOpen((MobileNavOpen) => !MobileNavOpen);
    console.log("mobile nav open? " + isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setTimeout(() => SetisMobileNavOpen(false), 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", closeMobileNav);
  }, []);

  return (
    <div
      className={`nav-wrapper ${onMobile ? "mobile-nav" : "desktop-nav"} ${isMobileNavOpen && "mobileNavOpen"} ${isScrolled && "on-scroll"}`}

      // onClick={toogleMobileNav}
    >
      <div className={`nav-container `} onClick={closeMobileNav}>
        <Logo />

        <ul className="link-container">
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
      {onMobile && (
        <div className="mobile-nav-bar__button" onClick={toogleMobileNav}>
          <span className="navigation-bar"></span>
          <span className="navigation-bar"></span>
          <span className="navigation-bar"></span>
        </div>
      )}
    </div>
  );
};

export default Navigation;
