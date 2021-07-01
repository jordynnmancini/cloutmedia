import React from "react";
import "./topbar.scss";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Topbar({ menuOpen, toggleMenu }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a className="logo">Clout</a>
        </div>
        <div className="iconContainer">
          <a href="./login">
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
