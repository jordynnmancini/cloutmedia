import React from "react";
import "./topbar.scss";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from 'react-router-dom'; 


export default function Topbar({ menuOpen, toggleMenu }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <Link to="./home">
            <img className="logo" src="assets/topbaricon.png" />
          </Link>
        </div>
        <div className="iconContainer">
          <Link to={"dashboard"}>
            {" "}
            <AccountCircleIcon fontSize="large" className="icon" />
          </Link>
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
