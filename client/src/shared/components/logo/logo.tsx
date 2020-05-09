import React from "react";
import pizzaBackround from "../../../images/pizzaBackground.jpg";
import "./logo.css";
export default function Logo() {
  return (
    <div className="logo">
      <img className="brand-logo" alt="pizzaBackground" src={pizzaBackround} />
    </div>
  );
}
