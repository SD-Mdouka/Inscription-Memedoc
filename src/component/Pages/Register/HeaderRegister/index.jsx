/** @format */

import React, { Component } from "react";
class HeaderRegister extends Component {
  render() {
    if (window.location.pathname === "/") {
      return (
        <div>
          <h3>Saisissez votre adresse e-mail</h3>
          <p>
            Vous en aurez besoin pour vous connecter et accéder à votre
            application Memedoc .
          </p>
        </div>
      );
    } else if (window.location.pathname === "/confirme") {
      return (
        <div>
          <h3>Un code de confirmation vous attend dans votre boite e-mail</h3>
          <p>Saisissez le code de 6 chiffres que nous vous avons envoyé sur.</p>
        </div>
      );
    } else if (window.location.pathname === "/confirme_passe_word") {
      return (
        <>
          <h3>Definissez votre nouveau mots de passe</h3>
          <p>
            Choissiez un mot de passe sécurisé dont vous vous souviendrez
            faciliement .
            <br /> <span className="PSWConfirme">Mot de passe</span>
          </p>
        </>
      );
    } else if (window.location.pathname === "/confirme_passe") {
      return (
        <>
          <h3>Procédons à l'enregistrement de votre pharmacie</h3>
          <p>
            Préparez ces élémentspour finaliserl'ouverturede votre compte
            pharmacien .
          </p>
        </>
      );
    } else {
      <div className="mb-4">
        <h3>Page undifine</h3>
      </div>;
    }
  }
}
export default HeaderRegister;
