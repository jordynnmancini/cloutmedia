import React from "react";
import "./dashboard.scss";
import { init } from "ityped";
import { useEffect, useRef, useState } from "react";
import API from "../../../utils/API";
import Modal from 'react-modal';

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

export default function Dashboard() {
  const id = localStorage.getItem('jwtToken').split('/')[0]
  const [userData, setUserData] = useState({});
  const [primaryLocation, setPrimaryLocation] = useState();
  const [subType, setSubType] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [bio, setBio] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    // const id = localStorage.getItem('jwtToken').split('/')[0]
    console.log(id, 'id')
    API.getUserData(id)
      .then(res => {
        setUserData(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err));

  }, [])

  const handleSubTypeChange = (e) => {
    const { value } = e.target;
    setSubType(value)
  }
  const handleBioChange = (e) => {
    const { value } = e.target;
    setBio(value)
  }

  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;
    setPhoneNumber(value)
  }

  const handlePrimaryLocationChange = (e) => {
    const { value } = e.target;
    setPrimaryLocation(value)
  }


  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);

    API.updateUserData(id, {
      bio: bio,
      subType: subType,
      phoneNumber: phoneNumber,
      primaryLocation: primaryLocation,
    })
      .then(res => setUserData(res.data))
      .catch(err => console.log(err))
  }

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

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
                <br />
                <li>{userData.name}</li>
                <li>{userData.type}</li>
                <li>{userData.primaryLocation}</li>
                <li>{userData.email}</li>
                <li>{userData.phoneNumber}</li>
                <br />
                <li>About Me:</li>
                {!userData.bio ? (
                  <p>edit your profile to include a bio. Increase your clout by showing off your accomplishments. </p>
                ) : (
                  <p>
                    {userData.bio}
                  </p>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="profileEdit">
            <button onClick={openModal} className="profileButton" type="submit">Edit Your Profile</button>
            <button className="previewButton" type="submit">Preview</button>
            <button className="settingsButton" type="submit">Setting/Security</button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="update profile form"
      >
        <input
          placeholder="prefer to be contacted by phone? Enter your number here"
          name="phoneNumber"
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <input
          placeholder="enter more about your profession(i.e. singer, guitar player, etc)"
          name="subType"
          type="text"
          value={subType}
          onChange={handleSubTypeChange}
        />
        <input
          placeholder="enter a bio"
          name="bio"
          type="text"
          value={bio}
          onChange={handleBioChange}
        />
        <label className="labelFor" for="primaryLocation"> Moving? Update your location: </label>
        <select
          value={primaryLocation}
          name="primaryLocation"
          onChange={handlePrimaryLocationChange}>
          <option value="Nashville">Nashville, TN</option>
          <option value="Los Angeles">Los Angeles, CA</option>
          <option value="New York City">New York City, NY</option>
        </select>

        <button onClick={handleUpdateSubmit}> save & close</button>
        <button onClick={closeModal}>close without saving</button>
      </Modal>

    </div>
  );
}
