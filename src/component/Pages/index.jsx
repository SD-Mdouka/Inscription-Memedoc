/** @format */

import React, { Component } from "react";
import Navber from "../Navbar";
import Footer from "../Footer";
import Register from "./Register";
import SidbarRegister from "../Sidbar/SidbarRegister";

class Pages extends Component {
  render() {
    return (
      //  Strecture Page Global
      <div className="d-lg-flex half">
        <SidbarRegister />
        <div className="contents order-3 order-md-1 mb-3">
          <Navber />
          <Register />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Pages;
