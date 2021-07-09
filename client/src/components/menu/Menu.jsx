import React from "react";
import { Link } from 'react-router-dom'; 
import "./menu.scss";

export default function Menu({ menuOpen, toggleMenu }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={toggleMenu}>
          <Link to='/Home'>Home</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to='/Dashboard'>Dashboard</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/Discover">Discover</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to='/about'>About</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to='/contact'>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}
