/** @format */

import React, { Component } from "react";

class FormVerifCode extends Component {
  state = {
    codeVerif: this.props.ParamEmail,
    userId: "",
  };

  onEmailChange = (e) => {
    this.setState({
      codeVerif: e.target.value,
      userId: this.props,
    });
  };

  render() {
    console.log(this.props.dataFromParent);
    return (
      <form action="#" method="post">
        <div className="form-group text-align-left last mb-3">
          <label htmlFor="email">Code de confirmation</label>
          <input
            type="text"
            className="form-control"
            id="number"
            placeholder="XXX-XXX"
            maxLength="6"
          />
        </div>
      </form>
    );
  }
}
export default FormVerifCode;
