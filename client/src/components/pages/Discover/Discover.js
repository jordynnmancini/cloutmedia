import React, { useState, useEffect, useRef } from "react";
import "./discovery.scss";
import { init } from "ityped";
import SearchIcon from '@material-ui/icons/Search';
import API from '../../../utils/API'; 

export default function Discovery() {
  const [results, setResults] = useState([]);
  const [type, setType] = useState();
  const [location, setLocation] = useState(); 

  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      strings: ["Discover"],
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
    });
  }, []);

  const handleInputChange = e => {
    const { value } = e.target;
    setType(value);
    setLocation(value); 
  }

  const handleSearchSubmit = e => {
    e.preventDefault(); 
    API.getSearchResults(type, location)
      .then(res => setResults(res.data))
      .catch(err => console.log(err)); 
  }

  return (
    <div className="discoverWrapper">
      <div className="discoverBanner">
        <h3 ref={textRef}></h3>
      </div>
      <div className="content">
        <div className="top">
          <div className="gpsBox"></div>
        </div>
        <div className="bottom">
          <div className="left">
            <h3>Search By Location:</h3>
            <search className="inputSearch">
              <input type="search" placeholder="Search" results="0" />
              <button className="searchButton" type="submit" ><SearchIcon fontSize="small"/></button>
            </search>
          </div>
          <div className="right">
            <h3>Sound Engineers in Your Area:</h3>
          <div className="soundEngineers">
          <div className="uls">
            <ul className="eng1">
              <li className="name">John Doe</li>
              <li className="title">Engineer</li>
              <a href="./whoopsie"><li className="info">More Info</li></a>
            </ul>
            <ul className="eng2">
            <li className="name">John Doe</li>
              <li className="title">Engineer</li>
              <a href="./whoopsie"><li className="info">More Info</li></a>
            </ul>
            <ul className="eng3">
            <li className="name">John Doe</li>
              <li className="title">Engineer</li>
              <a href="./whoopsie"><li className="info">More Info</li></a>
            </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
