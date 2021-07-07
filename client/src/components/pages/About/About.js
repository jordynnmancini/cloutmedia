import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div className="aboutWrapper">
      <div className="aboutContent">
        <img
          className="cloutlogo"
          src="assets/logo.png"
          alt="logo for clout media - FOR MUSIC INFLUENCERS ONLY."
        />
      </div>

      <div className="about">
        <p3>
          What is Clout? It's a way to connect the music industry together like
          never before. It's a site made for creatives and harnessing
          connections between them. As a musician or musical artist, it is often
          difficult to connect with sound engineers - and vice versa. Not
          anymore! This app allows you to foster connections in order to grow
          your musical career. Our app is first being tested in 3 major music
          cities - Nashville, Los Angeles, and New York. It is also starting out
          with two basic types of music industry professionals -
          Musicians/Artists and Sound Engineers. Future developments of this app
          might include more cities, and expanding the type of industry
          professionals that can join and benefit from this platform.
        </p3>
      </div>
    </div>
  );
}
