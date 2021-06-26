const router = require("express").Router();
const Artist = require('../../models/artist'); 
const jwt = require('jsonwebtoken'); 
const cookieParser = require('cookie-parser'); 
const withAuth = require('../../utils/auth'); 


//new artist sign up - matches with "/api/artists/signup"
router.post('/signup', function(req, res) {
    const { email, name, password, primaryLocation } = req.body;
    const artist = new Artist({ email, name, password, primaryLocation });
    artist.save(function(err) {
        if(err) {
            res.status(500)
                .send("error signing up - please try again")
        } else {
            res.status(200)
                .send(`Welcome, ${name}!`)
        }
    });
});

router.post('/login', function(req, res) {
    const { email, password } = req.body;
    Artist.findOne({ email }, function(err, artist) {
        if (err) {
            res.status(500)
        } else if (!artist) {
            res.status(401)
                .send('incorrect email or password')
        } else {
            artist.isCorrectPassword(password, function(err, same) {
                if (err) {
                    res.status(500)
                } else if (!same) {
                    res.status(401)
                        .send('incorrect email or password')
                } else {
                    const payload = { email };
                    const token = jwt.sign(payload, secret, {
                        expiresIn: '1h'
                    });
                    res.cookie('token', token, { httpOnly: true })
                        .sendStatus(200); 
                };
            });
        };
    });
});


module.exports = router; 