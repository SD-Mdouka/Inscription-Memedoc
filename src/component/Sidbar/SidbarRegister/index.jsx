/** @format */
import React, { Component } from "react";
class SidbarRegister extends Component {
  render() {
    if (window.location.pathname === "/") {
      return (
        <div className="bg order-3 order-md-3">
          <img src="/image/1 - Copie2.jpg" width="100%" height="70%" alt="" />
        </div>
      );
    } else if (window.location.pathname === "/confirme") {
      return (
        <div className="bg order-3 order-md-3">
          <img src="/image/preview.jpg" width="100%" height="70%" alt="" />
        </div>
      );
    } else if (window.location.pathname === "/confirme_passe_word") {
      return (
        <div className="bg order-3 order-md-3">
          <img src="/image/1 - Copie.jpg" width="100%" height="70%" alt="" />
        </div>
      );
    }
  }
}
export default SidbarRegister;
