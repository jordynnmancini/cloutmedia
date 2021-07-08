import React from "react";
import "./home.scss";
import LogoutButton from "../../Logout/logout";

export default function Home() {
  const renderButtons = () => {
    if (localStorage.getItem("jwtToken")) {
      return <LogoutButton />;
    } else {
      return (
        <div className="buttons">
          <a href="/Signup">
            <button className="signup" type="submit">
              Signup
            </button>
          </a>
          <a href="/login">
            <button className="login" type="submit">
              Login
            </button>
          </a>
        </div>
      );
    }
  };

  return (
    <div className="home">
      <div className="container">
        <div className="imgContainer">
          <img
            className="cloutlogo"
            src="assets/logo.png"
            alt="logo for clout media - FOR MUSIC INFLUENCERS ONLY."
          />
        </div>
      </div>
      {renderButtons()}
    </div>
  );
}
