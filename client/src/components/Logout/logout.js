import React from 'react';
import API from "../../utils/API";
import swal from "sweetalert"; 

export default function LogoutButton() {
    Logout = () => {
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
                        return this.props.history.push('/'); 
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
        <button onClick={Logout()}>
            Logout 
        </button>
    )

}