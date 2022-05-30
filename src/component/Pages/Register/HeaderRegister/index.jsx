/** @format */

import React, { Component } from "react";
class HeaderRegister extends Component {
  render() {
    if (window.location.pathname === "/") {
      return (
        <div className="mb-4">
          <h3>Saisissez votre adresse e-mail</h3>
          <p className="mb-4 mt-4">
            Vous en aurez besoin pour vous connecter et accéder à votre
            application Memedoc .
          </p>
        </div>
      );
    } else if (window.location.pathname === "/confirme") {
      return (
        <div className="mb-4">
          <h3>Un code de confirmation vous attend dans votre boite e-mail</h3>
          <p className="mb-4 mt-4">
            Saisissez le code de 6 chiffres que nous vous avons envoyé sur
            <br /> <span className="EmailConfirme">m.hameid@trenteneuf.co</span>
            .
          </p>
        </div>
      );
    } else if (window.location.pathname === "/confirme_passe_word") {
      return (
        <div className="mb-4">
          <h3>Definissez votre nouveau mots de passe</h3>
          <p className="mb-4 mt-4">
            Choissiez un mot de passe sécurisé dont vous vous souviendrez
            faciliement .
            <br /> <span className="PSWConfirme">Mot de passe</span>
          </p>
        </div>
      );
    } else {
      <div className="mb-4">
        <h3>Page undifine</h3>
      </div>;
    }
  }
}
export default HeaderRegister;
