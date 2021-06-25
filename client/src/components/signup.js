import React, { Component } from "react";
import AuthHelperMethods from "./AuthHelperMethods";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Signup extends Component {
    Auth = new AuthHelperMethods();
    state = {
        username: "",
        name: "",
        password: "",
        email: "",
        primaryLocation: ""
    }

    _handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        axios.post("/signup", {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            primaryLocation: this.state.primaryLocation,

        })
            .then((data) => {
                this.props.history.replace('/login');
            })
    }

    componentDidMount() {
        if (this.Auth.loggedIn()) {
            this.props.history.push('/dashboard')
        }
    }

    render() {
        return (
            <div>
                <h1>Signup</h1>
                <form>
                    <input
                        placeholder="enter your name"
                        name="name"
                        type="text"
                        onChange={this._handleChange}
                    />
                    <input
                        placeholder="create a username"
                        name="username"
                        type="text"
                        onChange={this._handleChange}
                    />
                    <input
                        placeholder="enter your email"
                        name="email"
                        type="text"
                        onChange={this._handleChange}
                    />
                    <input
                        placeholder="create a password"
                        name="password"
                        type="password"
                        onChange={this._handleChange}
                    />
                    <input
                        placeholder="enter your Location"
                        name="primary location"
                        type="text"
                        onChange={this._handleChange}
                    />
                    <label id="user-type" for="user-type">I am a(n):</label>
                    <select name="user-type">
                        <option value="artist">Artist/Musician</option>
                        <option value="sound-engineer">Sound Engineer</option>
                    </select>
                    <button onClick={this.handleFormSubmit}>Signup</button>
                </form>
                <Link to="/login">Have an account already? <span>Login</span></Link>
            </div>
        )
    }
}