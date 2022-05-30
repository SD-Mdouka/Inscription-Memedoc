/** @format */

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class FooterRegister extends Component {
  confirmCode() {
    if (window.location.pathname === "/") {
      return (
        <div className="d-flex mb-5 align-items-center mt-4">
          <label className="control control--checkbox mb-0">
            <span className="caption">
              En cliquant sur Confirmer,vous acceptez notre
              <a className="politique" href="/">
                politique de confidentialité
              </a>
              applicable au traitement de vos données personnelles.
            </span>
          </label>
        </div>
      );
    } else if (window.location.pathname === "/confirme") {
      return (
        <>
          <div className="d-flex mb-5 align-items-center mt-4">
            <label className="control control--checkbox mb-0">
              <p className="spams">Votre code est peut-étre dans vos spams</p>
              <p className="caption">
                Toujours rien ?
                <NavLink to="/" className="forgot-pass">
                  Renvoyer le code
                </NavLink>
              </p>
            </label>
          </div>
          <div className="d-flex mb-5 align-items-center mt-4">
            <NavLink to="/" className="forgot-pass">
              <i className="fas fa-arrow-left"></i> Retour
            </NavLink>
          </div>
        </>
      );
    }
  }
  render() {
    return this.confirmCode();
  }
}
export default FooterRegister;
