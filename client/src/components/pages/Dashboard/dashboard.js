import React from "react";
import "./dashboard.scss";
import { init } from "ityped";
import { useEffect, useRef, useState } from "react";
import API from "../../../utils/API";
import Modal from "react-modal";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WorkIcon from "@material-ui/icons/Work";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Dashboard() {
  const id = localStorage.getItem("jwtToken").split("/")[0];
  const [userData, setUserData] = useState({});
  const [primaryLocation, setPrimaryLocation] = useState();
  const [subType, setSubType] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [bio, setBio] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [previewIsOpen, setPreviewOpen] = useState(false);

  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      strings: ["My Dashboard"],
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
    });
  }, []);

  useEffect(() => {
    // const id = localStorage.getItem('jwtToken').split('/')[0]
    console.log(id, "id");
    API.getUserData(id)
      .then((res) => {
        setUserData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    console.log(userData, "new user data")
  }, [userData])

  const handleSubTypeChange = (e) => {
    const { value } = e.target;
    setSubType(value);
  };
  const handleBioChange = (e) => {
    const { value } = e.target;
    setBio(value);
  };

  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;
    setPhoneNumber(value);
  };

  const handlePrimaryLocationChange = (e) => {
    const { value } = e.target;
    setPrimaryLocation(value);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();


    API.updateUserData(id, {
      bio: bio,
      subType: subType,
      phoneNumber: phoneNumber,
    })
      .then((res) => {
        setUserData(res.data)
        setIsOpen(false);
      })
      .catch((err) => console.log(err));
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openPreview = () => {
    setPreviewOpen(true);
  };

  const closePreview = () => {
    setPreviewOpen(false);
  };

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
                  <p>
                    edit your profile to include a bio. Increase your clout by
                    showing off your accomplishments.{" "}
                  </p>
                ) : (
                  <p>{userData.bio}</p>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="profileEdit">
            <button onClick={openModal} className="profileButton" type="submit">
              Edit Your Profile
            </button>
            <button
              onClick={openPreview}
              className="previewButton"
              type="submit"
            >
              Preview
            </button>
            <button className="settingsButton" type="submit">
              Setting/Security
            </button>
          </div>
        </div>
      </div>

      {/* Edit Your Profile Modal */}
      <Modal
        className=""
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="update profile form"
      >
        <h3>Update your Profile</h3>
        <label for='phone'>Enter a phone number:</label>
        <br />
        <input
          placeholder="i.e. 555-555-5555"
          name="phoneNumber"
          type="text"
          id='phone'
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <br />
        {userData.type === "Artist" ? (
          <div>
            <br />
            <label for='subType'>What kind of artist are you?</label>
            <br />
            <input
              placeholder="i.e. singer, drummer, etc."
              name="subType"
              id="subType"
              type="text"
              value={subType}
              onChange={handleSubTypeChange}
            />
          </div>
        ) : (
          <div>
            <br />
            <label for='subType'>What kind of sound engineer are you?</label>
            <br />
            <input
              placeholder="i.e. studio, systems, etc."
              name="subType"
              id="subType"
              type="text"
              value={subType}
              onChange={handleSubTypeChange}
            />
          </div>)}
        <br />
        <label for='id'>Enter a bio:</label>
        <br />
        <input
          placeholder="make it interesting!"
          name="bio"
          id='bio'
          type="text"
          value={bio}
          onChange={handleBioChange}
        />
        <br />
        <br />
        <button onClick={(e) => handleUpdateSubmit(e)}> save & close</button>
        <button onClick={closeModal}>close without saving</button>
      </Modal>

      {/* Preview Modal */}
      <Modal
        isOpen={previewIsOpen}
        onRequestClose={closePreview}
        style={customStyles}
        contentLabel="view preview"
      >
        <h1>{userData.name}</h1>
        <h4>{userData.stageName}</h4>
        <h6>
          <span>
            <LocationOnIcon />
          </span>
          {userData.primaryLocation}
        </h6>
        <h6>
          <span>
            <WorkIcon />
          </span>
          {userData.type}{" "}
          {!userData.subType ? <p></p> : <span>({userData.subType})</span>}
        </h6>
        {!userData.phoneNumber ? (
          <p></p>
        ) : (
          <h6>
            <span>
              <PhoneInTalkIcon />
            </span>
            {userData.phoneNumber}
          </h6>
        )}
        <br />
        {!userData.bio ? <p> </p> : <p> About me: "{userData.bio}"</p>}
        <p>
          Reach me at:{" "}
          <a
            href={
              "mailto:" +
              userData.email +
              "?subject=Found you on Clout! Let's talk."
            }
          >
            {userData.email}
          </a>{" "}
        </p>
        <br />
        <button onClick={closePreview}>close</button>
      </Modal>
    </div>
  );
}
