import React from "react";
import "./topbar.scss";
import PersonIcon from "@material-ui/icons/Person";

export default function Topbar({ menuOpen, toggleMenu }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
          <div className="left" className="logo"> Clout
            <div className="itemContainer">
              <PersonIcon fontSize="large" className="icon" />
              <span></span>
            </div>
          </div>
          <div className="right">
          <div className="hamburger" onClick={toggleMenu}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
