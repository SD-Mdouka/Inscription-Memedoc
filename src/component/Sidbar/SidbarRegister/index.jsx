/** @format */
import React, { Component } from "react";
class SidbarRegister extends Component {
  render() {
    if (window.location.pathname === "/") {
      return (
        <div className="float-right " style={{ width: "40%", height: "70%" }}>
          <img src="/image/1 - Copie2.jpg" width="100%" height="622px" alt="" />
        </div>
      );
    } else if (window.location.pathname === "/confirme") {
      return (
        <div className="float-right " style={{ width: "40%", height: "70%" }}>
          <img src="/image/preview.jpg" width="100%" height="622px" alt="" />
        </div>
      );
    } else if (window.location.pathname === "/confirme_passe_word") {
      return (
        <div className="float-right " style={{ width: "40%", height: "70%" }}>
          <img src="/image/1 - Copie.jpg" width="100%" height="622px" alt="" />
        </div>
      );
    } else if (window.location.pathname === "/confirme_passe") {
      return (
        <div className="float-right " style={{ width: "40%", height: "70%" }}>
          <img src="/image/preview.jpg" width="100%" height="622px" alt="" />
        </div>
      );
    }
  }
}
export default SidbarRegister;
