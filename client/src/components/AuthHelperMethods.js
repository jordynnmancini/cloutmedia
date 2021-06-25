import decode from 'jwt-decode';

export default class AuthHelperMethods {
    constructor(domain) {
        this.domain = domain || 'http://localhost:3000'
    }
    login = (username, password) => {
        return this.fetch('/log-in', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            })
        }).then(res => {
            this.setToken(res.token)
            return Promise.resolve(res);
        });
    };

    loggedIn = () => {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token); 
    };

    isTokenExpired = token => {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            console.log("expired check failed!");
            return false;
        }
    };

    setToken = idToken => {
        localStorage.setItem("id_token", idToken);
    };

    getToken = () => {
        return localStorage.getItem("id_token");
    };

    logout = () => {
        localStorage.removeItem("id_token");
    };

    getConfirm = () => {
        let answer = decode(this.getToken());
        console.log("Recieved answer");
        return answer;
    };

    fetch = (url, options) => {
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json"
        };
        if (this.loggedIn()) {
            headers["Authorization"] = "Bearer " + this.getToken();
        }

        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json());
    };

    _checkStatus = response => {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    };
};


