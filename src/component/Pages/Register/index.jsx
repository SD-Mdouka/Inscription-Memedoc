/** @format */

import React, { Component } from "react";
import FooterRegister from "./FooterRegister";
import HeaderRegister from "./HeaderRegister";
import FormesRegister from "./FormesRegister";
import "./style.css";

class Register extends Component {
  render() {
    return (
      // Container Page Register
      <div className="container-fluid">
        <HeaderRegister />
        <FormesRegister />
        <FooterRegister />
      </div>
    );
  }
}

export default Register;
