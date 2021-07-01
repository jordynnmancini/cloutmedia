import React from "react";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="imgContainer">
          <img className="cloutlogo"
            src="assets/logo.png"
            alt="logo for clout media - connecting the music industry together"
          />
        </div>
      </div>
      <div className="buttons">  
            {/* need to find a way to incorperate a modal into this section and bring the sign in pahe into this page somehow */}
            <a href="/Signup">
            <button className="signup"> Signup! </button> </a>
           <a href="./"> <button className="learnMore"   type="submit">
          Learn More!
        </button>
        </a>
      </div>
    </div>
  );
}
