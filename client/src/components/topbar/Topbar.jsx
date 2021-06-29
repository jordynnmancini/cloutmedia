import React from 'react';
import "./topbar.scss";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


export default function Topbar({ menuOpen, toggleMenu }) {
  
  
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            clout
          </a>
          <div className="itemContainer">
            <AccountCircleIcon fontSize="large" className="icon" />
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
