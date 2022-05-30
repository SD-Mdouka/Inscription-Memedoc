/** @format */

import React, { Component } from "react";
import FooterRegister from "./FooterRegister";
import FormesRegister from "./FormesRegister";
import HeaderRegister from "./HeaderRegister";
import "./style.css";

class Register extends Component {
  render() {
    return (
      // Container Page Register
      <div className="container">
        <div className="row justify-content-center mt-4">
          <div className="col-md-9">
            <HeaderRegister />
            <FormesRegister />
            <FooterRegister />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
