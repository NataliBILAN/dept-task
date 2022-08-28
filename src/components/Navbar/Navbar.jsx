import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import { ReactComponent as Dots } from "./../../icons/dots.svg";
import { ReactComponent as LogoBlack } from "./../../icons/dept-black.svg";
import { ReactComponent as LogoWhite } from "../../icons/dept-white.svg";
import { ReactComponent as CloseButton } from "../../icons/close-button.svg";

import "./Navbar.scss";

const listMenu = [
  {
    name: "Work",
    to: "/work",
  },
  {
    name: "Culture",
    to: "/culture",
  },
  {
    name: "Services",
    to: "/services",
  },
  {
    name: "Insights",
    to: "/insights",
  },
  {
    name: "Careers",
    to: "/careers",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const isMobile = screenWidth <= 480;

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const toggleNav = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleBigMenuOpen = () => console.log("big menu");

  return (
    <nav
      className={classNames("nav", {
        "nav--opened-menu": isMobileMenuOpen === true,
      })}
    >
      {isMobile ? (
        <>
          {isMobileMenuOpen ? (
            <>
              <NavLink to="/">
                <LogoWhite />
              </NavLink>
              <CloseButton onClick={toggleNav} />
            </>
          ) : (
            <>
              <NavLink to="/">
                <LogoBlack />
              </NavLink>
              <div className="mobile-menu-button" onClick={toggleNav}>
                Menu
              </div>
            </>
          )}

          <ul className="nav-list nav-list--mobile">
            {listMenu.map(({ name, to }) => {
              return (
                <NavLink
                  className={({ isActive }) =>
                    "nav-list_item" + (!isActive ? " unselected" : " selected")
                  }
                  to={to}
                  key={name}
                  onClick={toggleNav}
                >
                  <span className="nav-list_item-name">{name}</span>
                </NavLink>
              );
            })}
          </ul>
        </>
      ) : (
        <>
          <NavLink to="/">
            <LogoWhite />
          </NavLink>
          <ul className="nav-list nav-list--desktop">
            {listMenu.map(({ name, to }) => {
              return (
                <NavLink
                  className={({ isActive }) =>
                    "nav-list_item" + (!isActive ? " unselected" : " selected")
                  }
                  to={to}
                  key={name}
                >
                  {name}
                </NavLink>
              );
            })}
            <Dots className="nav-list_dots" onClick={handleBigMenuOpen} />
          </ul>
        </>
      )}
    </nav>
  );
}
