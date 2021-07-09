import React from "react";
import "./home.scss";
import LogoutButton from "../../Logout/logout";
import { Link } from 'react-router-dom'; 

export default function Home() {
  const renderButtons = () => {
    if (localStorage.getItem("jwtToken")) {
      return <LogoutButton />;
    } else {
      return (
        <div className="buttons">
          <Link to="/Signup">
            <button className="signup" type="submit">
              Signup
            </button>
          </Link>
          <Link to="/login">
            <button className="login" type="submit">
              Login
            </button>
          </Link>
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
