import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import API from "../../utils/API";
import "./signup.scss";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      primaryLocation: "Nashville",
      type: "Artist",
      thumbnail: ""
    };
  }

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleTypeChange = (e) => {
    console.log(e.target.value);
    this.setState({ type: e.target.value }, () => {
      console.log(this.state);
    });
  };

  handleLocationChange = (e) => {
    this.setState({ primaryLocation: e.target.value }, () => {
      console.log(this.state);
    });
  };

  handleThumbnailChange = (e) => {
    this.setState({ thumbnail: e.target.value, data: e.target.files[0] }, () => {
      console.log(JSON.stringify(e.target.files[0]));
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    API.userSignup({
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      primaryLocation: this.state.primaryLocation,
      type: this.state.type,
      thumbnail: this.state.thumbnail,
      data: this.state.thumbnail_data,
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.id);
          localStorage.setItem("jwtToken", res.data.token);
          this.props.history.replace("/dashboard");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        console.log(this.state);
        alert("Make sure you fill in all the fields & try again!");
      });
  };

  //preventing already logged in users from seeing the signup page
  componentDidMount() {
    if (localStorage.getItem("jwtToken") !== null) {
      return this.props.history.replace("/dashboard");
    }
  }

  render() {
    return (
      <div className="signupWrapper">
        <div className="formContainer">
          <form enctype="mulitpart/form-data">
            <h1>Signup</h1>
            <input
              className="inputName"
              placeholder="enter your first & last name"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <input
              className="inputUserName"
              placeholder="enter your email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <input
              className="inputPassword"
              placeholder="create a password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <label className="labelFor" for="user-type">
              I am a(n):
            </label>
            <select
              value={this.state.type}
              className="dropDown"
              id="user-type"
              name="type"
              onChange={this.handleTypeChange}
            >
              <option value="Artist">Artist/Musician</option>
              <option value="Sound Engineer">Sound Engineer</option>
            </select>
            <label className="labelFor" for="primary-location">
              {" "}
              Living in:{" "}
            </label>
            <select
              value={this.state.primaryLocation}
              className="dropDown"
              id="primaryLocation"
              name="primaryLocation"
              onChange={this.handleLocationChange}
            >
              <option value="Nashville">Nashville, TN</option>
              <option value="Los Angeles">Los Angeles, CA</option>
              <option value="New York City">New York City, NY</option>
            </select>
            <label className="labelFor" for="image">Upload Image</label>
            <input type="file" name="thumbnail" id="thumbnail" value={this.state.thumbnail} onChange={this.handleThumbnailChange}></input>
            <button className="signupButton" onClick={this.onSubmit}>
              Signup
            </button>
            <Link className="linkText" to="/login">
              Have an account already? <span>Click here to login!</span>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
