import React from 'react';
import { useHistory } from "react-router-dom"; 
import swal from "sweetalert"; 
import './logout.scss'; 

export default function LogoutButton() {
    const history = useHistory()

    const Logout = () => {
        swal("Are you sure you want to log out?", {
            buttons: {
                stay: {
                    text: "Nevermind",
                    value:"stay"
                },
                sure: {
                    text: "I'm Sure",
                    value: "sure"
                }
            }
        }).then(value => {
            switch(value) {
                case "sure":
                    swal("Log out successful!", ":)")
                    .then(val => {
                        localStorage.removeItem('jwtToken');
                        history.push('/')
                    });
                    break;
                case 'stay':
                    swal("","sounds good!");
                    break;
                default: swal('nevermind'); 
            }
        })
    }

    return (
        <button className="logout" onClick={() => Logout()}>
            Logout 
        </button>
    )

}