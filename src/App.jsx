/** @format */

import React, { Component } from "react";
import Pages from "./component/Pages";
import Login from "./component/Pages/Login";
import Acceuil from "./component/Pages/Accueil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Pages />} />
            <Route path="/confirme" element={<Pages />} />
            <Route path="/confirme_passe_word" element={<Pages />} />
            <Route path="/confirme_passe" element={<Pages />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Acceuil" element={<Acceuil />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
