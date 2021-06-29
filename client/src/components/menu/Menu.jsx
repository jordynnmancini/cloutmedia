import React from 'react';
import "./menu.scss"

export default function Menu({ menuOpen, toggleMenu }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={toggleMenu}>
                    <a href="#home">Home</a>
                </li>
                <li onClick={toggleMenu}>
                    <a href="#dashboard">Dashboard</a>
                </li>
                <li onClick={toggleMenu}>
                    <a href="#discover">Discover</a>
                </li>
                <li onClick={toggleMenu}>
                    <a href="#about">About</a>
                </li>
                <li onClick={toggleMenu}>
                    <a href="#contact">Contact Us</a>
                </li>
            </ul>
            
        </div>
    )
}
