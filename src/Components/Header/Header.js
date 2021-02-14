import React from "react";
import WildLogo from "../../Assets/wildLogo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header_Wrapper">
      <div className="Header">
        <p className="Logo">
          <img src={WildLogo} alt="Logo" />
        </p>
        <h1>Les Argonautes</h1>
      </div>
    </div>
  );
};

export default Header;
