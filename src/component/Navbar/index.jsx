/** @format */

import React from "react";
import "./style.css";
const Navber = () => {
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/confirme"
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
                <span>Vous avez un compte ? </span>
                <a className="link" href="/">
                  Se connecter
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  } else if (window.location.pathname === "/confirme_passe_word") {
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
  }
};
export default Navber;
