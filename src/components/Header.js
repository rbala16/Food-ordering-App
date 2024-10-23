import React from "react";
import { LOGO_IMG } from "../utils/constants";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      {/* <div className="logo-container">
        <img className="logo-img" alt="app-logo" src={LOGO_IMG} />
      </div> */}
     <Navbar/>
    </div>
  );
};

export default Header;
