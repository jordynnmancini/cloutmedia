import axios from "axios";

export default {
    //user API calls
    userSignup: function(userData) {
        return axios.post('/api/user/signup', userData)
    },
    userLogin: function(userData) {
        return axios.post('/api/user/login', userData)
    }
}