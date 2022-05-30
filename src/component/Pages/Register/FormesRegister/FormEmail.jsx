/** @format */

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class FormEmail extends Component {
  state = {
    email: "",
    user: "",
  };

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleSubmit = () => {
    const data = {
      email: this.state.email,
    };
    axios
      .post("https://memedoc.herokuapp.com/v1/auth/register", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  render(state = { data: "Hello World" }) {
    return (
      <form action="/confirme" method="post">
        <div className="form-group text-align-left last mb-3">
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
        </div>
        <NavLink
          to="/confirme"
          type="submit"
          onClick={this.handleSubmit}
          className="btn btn-block btn-success"
        >
          Confirmer
        </NavLink>
      </form>
    );
  }
}
export default FormEmail;
