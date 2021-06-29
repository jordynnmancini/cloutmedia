import React from "react";
import "./style.css";

export default function Dashboard() {
    return (
        <div className="dashboard">
        <div className="container">
           <div className="imgContainer">
                <img src="assets/logo.png" alt="logo for clout media - connecting the music industry together"/>
           </div>
        </div>
        <div className="buttons">
        <button className="initialButton"type="submit"> Signup!</button>
        <button className="button2" type="submit">Learn More!</button>
        </div>
        
        </div>
    )
}