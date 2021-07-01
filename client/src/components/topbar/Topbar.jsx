import React from "react";
import "./topbar.scss";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Topbar({ menuOpen, toggleMenu }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
        <a href="./home"><img className="logo" src="assets/topbaricon.png"/></a>
        </div>
        <div className="iconContainer">
          <a href={"dashboard"}>
            {" "}
            <AccountCircleIcon fontSize="large" className="icon" />
          </a>
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
