/** @format */

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Navber from "../../Navbar";
import Footer from "../../Footer";
import SidbarLogin from "../../Sidbar/SidbarLogin";

class Login extends Component {
  state = {
    PSW: "",
    email: "",
  };
  /*Start Handel Verif Passe word */
  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  onPSWChange = (e) => {
    this.setState({
      PSW: e.target.value,
    });
  };
  handleSubmit = (e) => {
    const data = {
      email: this.state.email,
      password: this.state.PSW,
    };

    axios
      .post("https://memedoc.herokuapp.com/v1/auth/login", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  /*End Handel Verif Code */
  render() {
    console.log(this.state);
    if (window.location.pathname === "/login") {
      return (
        //  Strecture Page Global
        <>
          <div className="container-fluid">
            <SidbarLogin />
            <div className="card">
              <div className="card-header">
                <Navber />
              </div>
              <div className="card-body card-login">
                <form action="/Acceuil" method="post">
                  <div className="form-group text-align-left last mb-3">
                    <div className="card-header">
                      <h2 className="textLogin">Login</h2>
                    </div>
                    <label htmlFor="email">Adresse e-mail</label>

                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      placeholder="Nathalie.durand@example.com"
                      value={this.state.email}
                      onChange={this.onEmailChange}
                      required
                    />
                    <label htmlFor="password">PassWord</label>

                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      placeholder="Salah@2002"
                      value={this.state.PSW}
                      onChange={this.onPSWChange}
                      required
                    />
                  </div>
                  <NavLink
                    to="/Acceuil"
                    type="submit"
                    onClick={this.handleSubmit}
                    className="btn btn-block btn-success"
                  >
                    Login
                  </NavLink>
                </form>
              </div>
              <div className="card-footer">
                <Footer />
              </div>
            </div>
          </div>
        </>
      );
    } else if (window.location.pathname === "/Acceuil") {
      return <p>Hello Acceuil</p>;
    }
  }
}

export default Login;
