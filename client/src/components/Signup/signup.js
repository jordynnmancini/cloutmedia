import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import API from "../../utils/API";
import "./signup.scss";


export default class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            name: "",
            password: "",
            primaryLocation: "",
            type: "",
        };
    }

    handleInputChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        API.userSignup({
            email: this.state.email,
            name: this.state.name,
            password: this.state.password,
            primaryLocation: this.state.primaryLocation,
            type: this.state.type,
        })
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data.id)
                    localStorage.setItem('jwtToken', res.data.token);
                    this.props.history.replace('/dashboard');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                console.log(this.state);
                alert('Error signing up - please try again!');

            });
    }
    // this.state.hasLoggedIn ? (<Redirect to="/dashboard" />) :

    render() {
        return (
            <div className='signupWrapper'>
                <div className="formContainer">
                    <form>
                        <h1>Signup</h1>
                        <input className="inputName"
                            placeholder="enter your name/stage name"
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                        />
                        <input className="inputUserName"
                            placeholder="enter your email"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                        <input className="inputPassword"
                            placeholder="create a password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                        <input className="inputLocation"
                            placeholder="enter your Location"
                            name="primaryLocation"
                            type="text"
                            value={this.state.primaryLocation}
                            onChange={this.handleInputChange}
                        />
                        {/* <label className="labelFor" for="user-type">I am a(n):</label>
                    <select className="dropDown" id="user-type" name="type" onChange={this.handleInputChange}>
                        <option value={this.state.type}>Artist/Musician</option>
                        <option value={this.state.type}>Sound Engineer</option>
                    </select> */}
                        <input className="dropDown"
                            placeholder="enter your type"
                            name="type"
                            type="text"
                            value={this.state.type}
                            onChange={this.handleInputChange}
                        />
                        <button className="signupButton" onClick={this.onSubmit}>Signup</button>
                        <Link className="linkText" to="/login">Have an account already?  <span>Click here to login!</span></Link>
                    </form>
                </div>
            </div>
        )
    }
}