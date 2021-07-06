import React from "react";
import "./dashboard.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Dashboard() {

  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      strings: [
        "My Dashboard",
      ],
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
    });
  }, []);
  return (
    <div className="dashboard">
      <div className="headerBox">
        <h2 ref={textRef}></h2>
      </div>
      <div className="container">
        <div className="left">
          <div className="top">
            <div className="imageContainer">
              <img className="img" src="assets/Andre.png" />
            </div>
          </div>
          <div className="bottom">
            <div className="info">
              <ul>
              <br/>
                <li>Andre Rodriguez</li>
                <li>Percussionist/Teacher</li>
                <li>Columbus, OH</li>
                <li>Andre.Rodriguez@gmail.com</li>
                <li>Cell: 614-592-8914</li>
                <br />
                <li>About Me!</li>
                <p> 
                  "Sed ut perspiciatis unde omnis iste natus error sit                                   
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi kjhdskjhds kjhdsakjhd kjhdaskjhdas
                  
                </p>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="profileEdit">
            <button className="profileButton" type="submit">Edit Your Profile</button>
            <button className="previewButton" type="submit">Preview</button>
            <button className="settingsButton" type="submit">Setting/Security</button>
          </div>
        </div>
      </div>
    </div>
  );
}
