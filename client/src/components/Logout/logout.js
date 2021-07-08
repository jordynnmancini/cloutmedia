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
                    value:"Stay"
                },
                sure: {
                    text: "I'm Sure",
                    value: "Sure"
                }
            }
        }).then(value => {
            switch(value) {
                case "Sure":
                    swal("Logout successful!", ":)")
                    .then(val => {
                        localStorage.removeItem('jwtToken');
                        history.push('/')
                    });
                    break;
                case 'Stay':
                    swal("","Sounds good!");
                    break;
                default: swal('Nevermind'); 
            }
        })
    }

    return (
        <div className="404Wrapper">
        <button className="logout" onClick={() => Logout()}>
            Logout 
        </button>
        </div>
    )

}