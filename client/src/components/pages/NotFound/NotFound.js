import React from "react";
import "./NotFound.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="imgContainer">
          <img className="cloutlogo"
            src="assets/404Error.png"
            alt="logo for clout media - for music influencers only."/>
      </div>
      </div>
      <a href="/Home"> <button className="signup"> Return Home  </button> </a>
      </div>
  );
}
