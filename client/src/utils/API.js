import axios from "axios";

export default {
    //artist API calls
    artistSignup: function(artistData) {
        return axios.post('/api/artists/signup', artistData)
    },
    artistLogin: function(artistData) {
        return axios.post('/api/artists/login', artistData)
    },

    //engineer API calls
    engineerSignup: function(engineerData) {
        return axios.post('/api/engineers/signup', engineerData)
    },
    engineerLogin: function(engineerData) {
        return axios.post('/api/engineers/login', engineerData)
    }
}