import React from "react";
import { LOGO_IMG } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo-img" alt="app-logo" src={LOGO_IMG} />
      </div>
      <div className="nav-container">
        <ul>
          <li>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
