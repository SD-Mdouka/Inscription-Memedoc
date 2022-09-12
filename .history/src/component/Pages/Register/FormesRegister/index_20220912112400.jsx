/** @format */

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { JQuerycode } from "./Data/Function";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Data/style.css";
import "./../style.css";

class FormesRegister extends Component {
  /*Start Jquery*/

  componentDidUpdate() {
    JQuerycode();
  }
  /****************************/
  /*End Jquery */
  state = {
    email: "",
    codeValide: "",
    user: "",
    PSW: "",
    token: "",
  };
  /*Start Handel Verif Forme email */
  onEmailChange = (e) => {
    e.preventDefault();
    this.setState({
      email: e.target.value,
    });
  };
  handleSubmitEmail = (e) => {
    if (this.state.email === "") {
      e.preventDefault();
    }
    const data = {
      email: this.state.email,
    };
    axios
      .post("https://memedoc.herokuapp.com/v1/auth/register", data)
      .then((res) => this.setState({ user: res.data.user }))
      .catch((err) => {
        if (this.state.email === "") {
          e.preventDefault();
        }
        console.log(err);
      });
  };
  /*End handel Verif Email*/
  /*Start Handel Verif Code */
  onCodeChange = (e) => {
    this.setState({
      codeValide: e.target.value,
    });
  };
  handleSubmitCode = (e) => {
    if (this.state.codeValide === "") {
      e.preventDefault();
    }
    const data = {
      userId: this.state.user.id,
      code: this.state.codeValide,
    };
    axios
      .post("https://memedoc.herokuapp.com/v1/auth/verify-otp", data)
      .then((res) => this.setState({ token: res.data.tokens.access.token }))
      .catch((err) => {
        e.preventDefault();
        console.log(err);
      });
  };
  /*End Handel Verif Code */
  /*Start Handel Verif Passe word */
  onPSWChange = (e) => {
    this.setState({
      PSW: e.target.value,
    });
  };
  handleSubmitPSW = (e) => {
    if (this.state.PSW === "") {
      e.preventDefault();
    }
    const data = {
      password: this.state.PSW,
    };

    axios
      .post("https://memedoc.herokuapp.com/v1/auth/set-password", data, {
        headers: {
          Authorization: `bearer  ${this.state.token}`,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => {
        if (this.state.PSW === "") {
          e.preventDefault();
        }
        console.log(err);
      });
  };
  /*End Handel Verif Code */
  /*End handel Verif Code*/

  ConfirmEmail() {
    const url = window.location.pathname;
    if (url === "/") {
      return (
        <form action="/confirme" method="post">
          <div className="form-group text-align-left last mb-3">
            <label htmlFor="email">Adresse e-mail</label>

            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              placeholder="Nathalie.durand@example.com"
              value={this.state.email}
              onChange={this.onEmailChange}
              required
            />
          </div>
          <NavLink
            to="/confirme"
            type="submit"
            onClick={this.handleSubmitEmail}
            className="btn btn-block btn-success"
            disabled
          >
            Confirmer
          </NavLink>
        </form>
      );
    } else if (url === "/confirme") {
      return (
        <form action="/confirme_passe_word" method="post">
          <span className="EmailConfirme">{this.state.user.email}</span>
          <div className="form-group text-align-left last mb-3">
            <label htmlFor="email">Code de confirmation</label>
            <input
              type="text"
              className="inputNum form-control"
              id="number"
              placeholder="XXX-XXX"
              maxLength="6"
              value={this.state.codeValide}
              onChange={this.onCodeChange}
              required
            />
            <NavLink
              to="/confirme_passe_word"
              type="submit"
              id="btnConfirmCode"
              onClick={this.handleSubmitCode}
              className="confirme"
              style={this.HandelBtn}
            >
              <Spinner
                as="span"
                variant="light"
                size="sm"
                role="status"
                aria-hidden="true"
                animation="border"
              />
              Confirmer
            </NavLink>
          </div>
        </form>
      );
    } else if (url === "/confirme_passe_word") {
      return (
        <form className="font-lg" action="#" method="post">
          <div className="validationList ">
            <div className="first-example ">
              <input
                id="userPassword"
                type="password"
                className="inputText password"
                placeholder="Saisissez votre mot de passe ici"
                value={this.state.passeword}
                onChange={this.onPSWChange}
              />
            </div>
            <div className="validationSpan">
              <span id="upperCaseSpan" className="spanList"></span>
              <span id="numberSpan" className="spanList"></span>
              <span id="specialCharacterSpan" className="spanList"></span>
              <span id="lengthSpan" className="spanList"></span>
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
            <NavLink
              id="btnConfirm"
              to="/confirme_passe"
              onClick={this.handleSubmitPSW}
              className="confirme"
            >
              <Spinner
                as="span"
                variant="light"
                size="sm"
                role="status"
                aria-hidden="true"
                animation="border"
              />
              Confirmer
            </NavLink>
          </div>
        </form>
      );
    } else if (url === "/confirme_passe") {
      return (
        <form action="/Acceuil" method="post">
          <div className="chekSIRET">
            <p className="passSire">
              <i className="far fa-check-circle"></i> Le nom ou le numéro SIRET
              de votre entreprise
            </p>
          </div>
          <NavLink
            to="/Acceuil"
            type="submit"
            className="btn btn-block btn-success"
          >
            Commencer
          </NavLink>
          <p>
            Il vous manque des éléments ? Connectez-vous à tout moment pour
            finaliser l'inscription
          </p>
        </form>
      );
    }
  }
  render() {
    return this.ConfirmEmail();
  }
}
export default FormesRegister;
