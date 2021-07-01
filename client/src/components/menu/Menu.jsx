import React from 'react';
import "./menu.scss"

export default function Menu({ menuOpen, toggleMenu }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={toggleMenu}>
                    <a href="/Home">Home</a>
                </li>
                <li onClick={toggleMenu}>
                    <a href="/Dashboard">Dashboard</a>
                </li>
                <li onClick={toggleMenu}>
                    <a href="/Discover">Discover</a>
                </li>
                <li onClick={toggleMenu}>
                    <a href="/About">About</a>
                </li>
                <li onClick={toggleMenu}>
                    <a href="/Contact">Contact Us</a>
                </li>
            </ul>
            
        </div>
    )
}
