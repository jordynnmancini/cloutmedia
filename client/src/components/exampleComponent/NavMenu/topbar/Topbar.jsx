import React from 'react';
import "./topbar.scss";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";


export default function Topbar({ menuOpen, setMenuOpen }) {
  
  
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            clout
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span></span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span></span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
