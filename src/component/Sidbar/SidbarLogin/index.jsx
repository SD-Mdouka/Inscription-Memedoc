/** @format */
import React, { Component } from "react";
class SidbarLogin extends Component {
  render() {
    if (window.location.pathname === "/login") {
      return (
        <div className="float-right " style={{ width: "40%", height: "70%" }}>
          <img src="/image/1 - Copie2.jpg" width="100%" height="622px" alt="" />
        </div>
      );
    }
  }
}
export default SidbarLogin;
