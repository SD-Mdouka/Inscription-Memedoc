/** @format */

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Data/style.css";

class FormeNewPSW extends Component {
  constructor() {
    super();
    this.state = {
      passeword: "",
      isvalid: false,
      message: "",
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      passeword: e.target.value,
    });
  }

  IsLengthValidConfirm() {
    const regex = new RegExp("[A-Z]");
    return !(
      !this.state.passeword || regex.test(this.state.passeword) === false
    );
  }

  render() {
    const messageTemplate = this.state.message ? (
      <div
        className={"alert alert-" + (this.state.isvalid ? "success" : "danger")}
        role="alert"
      >
        {this.state.message}
      </div>
    ) : (
      ""
    );
    return (
      <form action="#" method="post">
        <div className="validationList">
          <div className="first-example">
            <input
              id="userPassword"
              type="password"
              className="inputText password"
              placeholder="Saisissez votre mot de passe ici"
              value={this.state.passeword}
              onChange={this.onChange}
            />
            {/* <i id="pass-status" className="fa fa-eye" aria-hidden="true"></i> */}
            {/* onClick="viewPassword()" */}
          </div>
          <div className="validation">
            <p className="complet" id="length">
              Assurez-vous qu'il soit composé de 9 caractéres minimum
            </p>
            <p id="upperCase">
              <i className="far fa-check-circle"></i> Au moins 1 majuscule
            </p>
            <p id="number">
              <i className="far fa-check-circle"></i> Au moins 1 chiffre
            </p>
            <p id="specialCharacter">
              <i className="far fa-check-circle"></i> Au moins 1 caractéres
              spécial
            </p>
          </div>
          <NavLink id="btnConfirm" to="/confirme_passe" className="confirme">
            Confirmer
          </NavLink>
        </div>

        {messageTemplate}
      </form>
    );
  }
}
export default FormeNewPSW;
