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

  const handleTypeChange = e => {
    const { value } = e.target;
    setType(value);
  };

  const handleLocationChange = e => {
    const { value } = e.target;
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
        <div className='top'>
          <div className='left'>
            <h3>Search:</h3>
            <label>Discover:</label>
            <select value={type} onChange={handleTypeChange}>
              <option value="Artist">Artists/Musicians</option>
              <option value="Sound Engineer">Sound Engineers</option>
            </select>
            <label>In:</label>
            <select value={location} onChange={handleLocationChange}>
              <option>Nashville</option>
              <option>Los Angeles</option>
              <option>New York City</option>
            </select>
            <button onClick={handleSearchSubmit} className="searchButton" type="submit" ><SearchIcon fontSize="small" /></button>
          </div>
        </div>
        <div className="bottom">
          <div className="right">
            <h3>Results in Your Area:</h3>
            <div className="soundEngineers">
              <div className="uls">
                {!results.length ? (
                  <h1>no results</h1>
                ) : (
                  <div>
                    {results.map(result => {
                      return (
                        <ul className="eng1">
                          <li className="name">{result.name}</li>
                          <li className="title">{result.type} - {result.subType}</li>
                          <a href="./whoopsie"><li className="info">More Info</li></a>
                        </ul>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}