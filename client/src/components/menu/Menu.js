import React from 'react';
import "./menu.scss"

export default function Menu({ menuOpen, toggleMenu }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={toggleMenu}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={toggleMenu}>
                    <a href="#portfolio">Discover</a>
                </li>
                <li onClick={toggleMenu}>
                    <a href="#works">About</a>
                </li>
                <li onClick={toggleMenu}>
                    <a href="#contact">Contact US</a>
                </li>
            </ul>
            
        </div>
    )
}
