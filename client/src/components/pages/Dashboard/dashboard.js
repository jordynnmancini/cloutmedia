import React from "react";
import "./dashboard.scss";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="container">
        <h2> My Dashboard</h2>
        <div className="left">
          <div className="info">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="profileEdit">
            <button className="profileButton" type="submit"></button>
            <button className="previewButton" type="submit"></button>
            <button className="settingsButton" type="submit"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
