import React from "react";
import "./contact.scss";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import PeopleIcon from "@material-ui/icons/People";

export default function Contact() {
  return (
    <div className="contactWrapper">
      <div className="contactUs">
        <img
          className="cloutlogo"
          src="assets/logo.png"
          alt="logo for clout media - FOR MUSIC INFLUENCERS ONLY."
        />
      </div>
      <div className="main">
        <h3>
          Hello If You Have A Question Or An Improvement You Think Would Be A
          Great Addition To Clout Drop Us A Line Below!
        </h3>
        <div className="socialLogos">
          <MailOutlineIcon className="mail" fontSize="large" />
          <GitHubIcon className="hub" fontSize="large" />
          <PeopleIcon className="people" fontSize="large" />
        </div>
        <div className="links">
          <h4>
            <a target="_blank" href="https://github.com/drae7299"> Andre Rodriguez</a>
          </h4>

          <h4>
            <a target="_blank" href="https://github.com/jordynnmancini"> Jordyn Mancini</a>
          </h4>

          <h4>
            <a target="_blank" href="https://github.com/oconnor97"> Michael O'Connor</a>
          </h4>

          <h4>
            <a target="_blank" href="https://github.com/SarehonTaylor">
              {" "}
              Sarehon Taylor
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}
