import axios from "axios";

export default {
    //user authentication API calls
    userSignup: function (userData) {
        return axios.post('/api/user/signup', userData)
    },
    userLogin: function (userData) {
        return axios.post('/api/user/login', userData)
    },

    //discover page API calls
    getSearchResults: function (type, location) {
        return axios.get('api/user/discover', { params: { type: type, primaryLocation: location } })
    },

    // dashboard APi
    getUserData: function (id) {
        return axios.get('api/user/dashboard', { params: { id: id } })
    },

    updateUserData: function (id, userData) {
        return axios.put('api/user/update', { params: { id: id, userData: userData } },)
    },
}