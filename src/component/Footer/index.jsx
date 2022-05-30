/** @format */
import React from "react";
import { FooterDescription, FooterSection } from "./style.jsx";
// funcion component

const Footer = () => {
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/confirme"
  ) {
    return (
      <FooterSection>
        <FooterDescription> Privacy Policy . Term of use </FooterDescription>
      </FooterSection>
    );
  }
};

export default Footer;
