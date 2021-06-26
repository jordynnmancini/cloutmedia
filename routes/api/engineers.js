const router = require("express").Router();
const Engineer = require('../../models/engineer');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const withAuth = require('../../utils/auth');


//new engineer sign up matches with "/api/engineers/signup"
router.post('/signup', function (req, res) {
    const { email, name, password, primaryLocation } = req.body;
    const engineer = new Engineer({ email, name, password, primaryLocation });
    engineer.save(function (err) {
        if (err) {
            res.status(500)
                .send("error signing up - please try again")
        } else {
            res.status(200)
                .send(`Welcome, ${name}!`)
        }
    });
});

router.post('/login', function (req, res) {
    const { email, password } = req.body;
    Engineer.findOne({ email }, function (err, engineer) {
        if (err) {
            res.status(500)
        } else if (!engineer) {
            res.status(401)
                .send('incorrect email or password')
        } else {
            engineer.isCorrectPassword(password, function (err, same) {
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