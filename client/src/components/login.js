import React, { Component } from "react";
import AuthHelperMethods from "./AuthHelperMethods";
import { Link } from "react-router-dom"; 

export default class Login extends Component {
    Auth = new AuthHelperMethods(); 
    
    state = {
        username: "",
        password: ""
    }

    _handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleFormSubmit = e => {
        e.preventDefault();

        this.Auth.login(this.state.username, this.state.password)
        .then(res => {
            if (!res) {
                return alert("No account with that username or password. Try again or sign up with a new account.")
            }
            this.property.history.replace('/');
        })
        . catch(err =>  {
            console.log(err); 
        })
    }

    componentWillMount() {
        if(this.Auth.loggedIn())
            this.props.history.replace('/');
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <input 
                        placeholder="enter username"
                        name="username"
                        type="text"
                        onChange={this._handleChange}
                    />
                     <input 
                        placeholder="enter password"
                        name="password"
                        type="password"
                        onChange={this._handleChange}
                    />
                    <button onClick={this.handleFormSubmit}>Login</button>
                </form>
                <Link to="/signup">Don't have an account? <span>Signup</span></Link>
            </div>
        )
    }
}
