import React from "react";
import "./discovery.scss";

export default function Discovery() {
  return (
    <div className="discoverWrapper">
      <div className="discoverBanner">
        <h3>Discover</h3>
      </div>
      <div className="content">
        <div className="top">
          <div className="gpsBox"></div>
        </div>
        <div className="bottom">
          <div className="left">
              <h3>Search By Location</h3>
              <search className="inputSearch">
              <input type="search" placeholder="Search" results="0" />
              <button className="searchButton" type="submit"></button>
              </search>
          </div>
          <div className="right">
              <h3>Sound Engineers in Your Area</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
