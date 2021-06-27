import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

export default class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            name: "",
            password: "",
            primaryLocation: "",
            type: ""
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
        
// write if statement - if signing up as artist or engineer?
        API.userSignup({
            email: this.state.email,
            name: this.state.name, 
            password: this.state.password,
            primaryLocation: this.state.primaryLocation,
            type: this.state.type
        })
            .then(res => {
                if(res.stats === 200) {
                    this.props.history.replace('/login');
                } else {
                    const error = new Error(res.error); 
                    throw error; 
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error signing up - please try again!'); 
            });
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
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        required
                    />
                    <input
                        placeholder="enter your email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                    />
                    <input
                        placeholder="create a password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                    <input
                        placeholder="enter your Location"
                        name="primary location"
                        type="text"
                        value={this.state.primaryLocation}
                        onChange={this.handleInputChange}
                        required
                    />
                    <label for="user-type">I am a(n):</label>
                    <select id="user-type" name="user-type">
                        <option value="artist">Artist/Musician</option>
                        <option value="sound-engineer">Sound Engineer</option>
                    </select>
                    <button onClick={this.onSubmit}>Signup</button>
                </form>
                <Link to="/login">Have an account already? <span>Login</span></Link>
            </div>
        )
    }
}