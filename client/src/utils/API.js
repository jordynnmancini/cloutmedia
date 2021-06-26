import axios from "axios";

export default {
    //artist calls
    artistSignup: function(artistData) {
        return axios.post('/api/artists/signup', artistData)
    },
    artistLogin: function(artistData) {
        return axios.post('/api/artists/login', artistData)
    }

}