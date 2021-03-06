/** @format */

import React, { Component } from "react";
import Navber from "./../Navbar";
import Footer from "./../Footer";
import Register from "./Register";
import SidbarRegister from "./../Sidbar/SidbarRegister";

class Pages extends Component {
  render() {
    return (
      //  Strecture Page Global
      <div className="container-fluid">
        <SidbarRegister />

        <div className="card">
          <div className="card-header">
            <Navber />
          </div>
          <div className="card-body card-register">
            <Register />
          </div>
          <div className="card-footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Pages;
