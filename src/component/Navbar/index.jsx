/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const Navber = () => {
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/confirme"
  ) {
    return (
      <>
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            <img
              src="/image/Capture d’écran 2022-05-27 150143.png"
              width="100%"
              alt=""
            />
          </a>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <span>Vous avez un compte ? </span>
              <NavLink className="link" to="/login">
                Se connecter
              </NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
  } else if (
    window.location.pathname === "/confirme_passe_word" ||
    window.location.pathname === "/confirme_passe"
  ) {
    return (
      <>
        <nav className="navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src="/image/Capture d’écran 2022-05-27 150143.png"
                width="100%"
                alt=""
              />
            </a>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="link" href="/">
                  NOUVELLE PHARMACIE
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  } else if (window.location.pathname === "/login") {
    return (
      <>
        <nav className="navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src="/image/Capture d’écran 2022-05-27 150143.png"
                width="100%"
                alt=""
              />
            </a>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                NOUVELLE PHARMACINE
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#"></a>
              </div>
            </li>
          </div>
        </nav>
      </>
    );
  } else if (window.location.pathname === "/Acceuil") {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            <a className="navbar-brand" href="/">
              <img
                src="/image/Capture d’écran 2022-05-27 150143.png"
                width="50%"
                alt=""
              />
            </a>
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
};
export default Navber;
