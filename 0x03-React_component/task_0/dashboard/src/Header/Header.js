import React from "react";
import "../assets/logo-white.jpg";
import "./Header.css";

function Header() {
  return (
	<>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
	</>
  );
}

export default Header;
