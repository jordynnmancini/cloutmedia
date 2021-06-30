import { Modal } from "@material-ui/core";
import React from "react";
import "./dashboard.scss"

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="container">
      <h1>Testing</h1>
        <div className="imgContainer">
    
        </div>
      </div>
      <div className="buttons">
        <button className="initialButton" type="submit">
          Signup!
        </button>
        <button className="button2" type="submit">
          Learn More!
        </button>
      </div>
    </div>
  );
}
