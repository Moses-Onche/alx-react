import React from "react";
import logo from "../assets/logo-white.jpg";
import "./Header.css";

function Header() {
  return (
    <>
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </>
  );
}

export default Header;
