import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        
        API.userSignup({
            email: this.state.email,
            name: this.state.name, 
            password: this.state.password,
            primaryLocation: this.state.primaryLocation,
            type: this.state.type
        })
            .then(res => {
                if(res.stats === 200) {
                    this.props.history.replace('/dashboard');
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
            <div className='signupWrapper'>
            <div className="formContainer">
                <form>
                <h1>Signup</h1>
                    <input className="inputName"
                        placeholder="enter your name"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        required
                    />
                    <input className="inputUserName"
                        placeholder="enter your email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                    />
                    <input className="inputPassword"
                        placeholder="create a password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                    <input className="inputLocation"
                        placeholder="enter your Location"
                        name="primarylocation"
                        type="text"
                        value={this.state.primaryLocation}
                        onChange={this.handleInputChange}
                        required
                    />
                    <label className="labelFor" for="user-type">I am a(n):</label>
                    <select className="dropDown" id="user-type" name="user-type" onChange={this.handleInputChange}>
                        <option value={this.state.type}>Artist/Musician</option>
                        <option value={this.state.type}>Sound Engineer</option>
                    </select>
                    <button className="signupButton" onClick={this.onSubmit}>Signup</button>
                    <Link className="linkText" to="/login">Have an account already?  <span>Click here to login!</span></Link>
                </form>
                </div>
            </div>
        )
    }
}