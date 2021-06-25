const db = require("../models");
const bcrypt = require('bcryptjs'); 

module.exports = {
    create: function(req, res) {
        const { username, name, password, email, primaryLocation } = req.body;
        const saltRounds = 10; 
        bcrypt.hash(password, saltRounds, function (err, hash) {
            db.Artist
                .create({
                    username: username,
                    name: name,
                    password: hash,
                    email: email,
                    primaryLocation: primaryLocation
                })
                .then(result => res.json(result))
                .catch(err => res.status(422).json(err)); 
        })
    }
}; 