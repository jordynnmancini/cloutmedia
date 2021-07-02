import React from "react";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="imgContainer">
          <img
            className="cloutlogo"
            src="assets/logo.png"
            alt="logo for clout media - connecting the music industry together"
          />
        </div>
      </div>

      <div className="buttons">
        <a href="/Signup">
          <button className="signup" type="submit"> 
          Signup!  
          </button>
        </a>
        <a href="/login">
          <button className="login" type="submit">
            Login!
          </button>
        </a>

      </div>
    </div>
  );
}
