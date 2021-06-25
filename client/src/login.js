import React, { Component } from "react";
import AuthHelperMethods from "./components/AuthHelperMethods";
import { Link } from "react-router-dom"; 

class Login extends Component {
    Auth = new AuthHelperMethods(); 
    
    state = {
        username: "",
        password: ""
    }

    handleFormSubmit = e => {
        e.preventDefault();

        this.Auth.login(this.state.username)

    }
}
