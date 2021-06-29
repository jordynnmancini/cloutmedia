import React, { Component } from 'react';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./login.scss";



export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
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
// write if statement - logging in as artist or engineer? or have 2 separate login components? 
        API.userLogin({
            email: this.state.email,
            password: this.state.password,
        })
            .then(res => {
                if (res.status === 200) {
                    this.props.history.push('/dashboard');
                    localStorage.setItem('jwtToken', res.data.token); 
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
            });
    }

    //preventing already logged in users from seeing the login page
    componentDidMount() {
        if(localStorage.getItem('jwtToken') !== null){
            return this.props.history.goBack(); 
        }
    }

    render() {
        return (
            <div classname="loginWrapper">
            <div className="formContainer">
                <form>
                <h1>Login</h1>
                    <input className="inputEmail"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                    />
                    <input className="inputPassword"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                    <button onClick={this.onSubmit}>Login</button>
                    <Link to="/signup">Don't have an account yet? <span>Signup</span></Link>
                </form>
            </div>
            </div>
        );
    }
}