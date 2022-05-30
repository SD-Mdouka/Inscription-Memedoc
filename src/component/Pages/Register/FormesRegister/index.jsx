/** @format */

import React, { Component } from "react";
import FormEmail from "./FormEmail";
import FormVerifCode from "./FormVerifCode";
import FormeNewPSW from "./FormeNewPSW";
import "./../style.css";

class FormesRegister extends Component {
  ConfirmEmail() {
    const url = window.location.pathname;
    if (url === "/") {
      return <FormEmail />;
    } else if (url === "/confirme") {
      return (
        <>
          <FormVerifCode />
        </>
      );
    } else if (url === "/confirme_passe_word") {
      return (
        <>
          <FormeNewPSW />
        </>
      );
    }
  }
  render() {
    return this.ConfirmEmail();
  }
}
export default FormesRegister;
