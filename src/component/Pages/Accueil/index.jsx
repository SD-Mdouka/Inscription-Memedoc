/** @format */

import React, { Component } from "react";
import Navber from "./../..//Navbar";
import Footer from "./../../Footer";
import SidbarRegister from "./../../Sidbar/SidbarLogin";

import "./style.css";

class Accueil extends Component {
  render() {
    return (
      <div className="container-fluid">
        <SidbarRegister />

        <div className="card">
          <div className="card-header">
            <Navber />
          </div>
          <div className="card-body card-register"></div>
          <div className="card-footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Accueil;
