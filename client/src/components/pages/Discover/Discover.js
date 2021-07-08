import React, { useState, useEffect, useRef } from "react";
import Modal from 'react-modal';
import "./discover.scss";
import { init } from "ityped";
import SearchIcon from '@material-ui/icons/Search';
import API from '../../../utils/API';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WorkIcon from '@material-ui/icons/Work';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

//basic styling for modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Discover() {
  const [results, setResults] = useState([]);
  const [type, setType] = useState();
  const [location, setLocation] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedUser, setUser] = useState({
    name: '',
    email: '',
    bio: '',
    primaryLocation: '',
    type: '',
    stageName: '',
    subType: '',
    phoneNumber: ''
  });

  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      strings: ["Discover"],
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
    });

    setType('Artist');
    setLocation('Nashville');
  }, []);

  useEffect(() => {
    let value = JSON.parse(sessionStorage.getItem('results'))
    if (value) {
      setResults(value)
      console.log(value)
    }
  }, [])

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
      .then(res => {
        setResults(res.data)
        sessionStorage.setItem('results', JSON.stringify(res.data));
      })
      .catch(err => console.log(err));
  }

  function openModal(result) {
    console.log(result)
    setIsOpen(true);
    setUser({ 
      name: result.name, 
      email: result.email, 
      bio: result.bio, 
      primaryLocation: result.primaryLocation, 
      type: result.type, 
      stageName: result.stageName, 
      subType: result.subType, 
      phoneNumber: result.phoneNumber 
    })
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="discoverWrapper">
      <div className="discoverBanner">
        <h3 ref={textRef}></h3>
      </div>
      <div className="content">
        <div className='top'>
          <div className="searchTop">
            <h3>Search:</h3>
            <label className="roleLabel">Discover:</label>
            <select classname="selectSection" value={type} onChange={handleTypeChange}>
              <option className="roleDrop" value="Artist">Artists/Musicians</option>
              <option classname="locationDrop" value="Sound Engineer">Sound Engineers</option>
            </select>
            <label className="cityLabel">In:</label>
            <select value={location} onChange={handleLocationChange}>
              <option>Nashville</option>
              <option>Los Angeles</option>
              <option>New York City</option>
            </select>
            <button onClick={handleSearchSubmit} className="searchButton" type="submit" ><SearchIcon fontSize="small" /></button>
          </div>
        </div>
        <div className="bottom">
          <div className="results">
            {!results.length ? (
              <h3>Results in Your Area:</h3>
            ) : (
              <h3>{results[0].type}s in {results[0].primaryLocation}: </h3>
            )}
            <div className="soundEngineers">
              <div className="uls">
                {!results.length ? (
                  <h1 className="noResults">No Results</h1>
                ) : (
                  <div>

                    {results.map((result, key) => {
                      return (
                        <ul className="eng1" key={key}>
                          <li className="name">{result.name}</li>
                          <li className="title">{result.type} {!result.subType ? (
                            <span> </span>
                          ) : (
                            <span>({result.subType})</span>
                          )} </li>
                          <button onClick={() => openModal(result)}><li className="info">More Info</li></button>
                        </ul>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Discover Modal"
        >
          <h1>{selectedUser.name}</h1>
          <h4>{selectedUser.stageName}</h4>
          <h6><span><LocationOnIcon /></span>{selectedUser.primaryLocation}</h6>
          <h6><span><WorkIcon /></span>{selectedUser.type} {!selectedUser.subType ? (
            <p></p>
          ) : (
            <span>({selectedUser.subType})</span>
          )}</h6>
          {!selectedUser.phoneNumber ? (
            <p></p>
          ) : (
            <h6><span><PhoneInTalkIcon /></span>{selectedUser.phoneNumber}</h6>
          )}
          <br />
          {!selectedUser.bio ? (
            <p> </p>
          ) : (
            <p> About me: "{selectedUser.bio}"</p>
          )}
          <p>Reach me at: <a href={"mailto:" + selectedUser.email + "?subject=Found you on Clout! Let's connect."}>{selectedUser.email}</a> </p>
          <br />
          <button onClick={closeModal}>close</button>
        </Modal>
      </div>
    </div>
  );
}