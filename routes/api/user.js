const router = require("express").Router();
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const withAuth = require('../../utils/auth');
const secret = 'supersupersecret';


//new user sign up - matches with "/api/user/signup"
router.post('/signup', function (req, res) {
    const { email, name, password, primaryLocation, type } = req.body;
    const user = new User({ email, name, password, primaryLocation, type });
    user.save(function (err) {
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
    User.findOne({ email }, function (err, user) {
        if (err) {
            res.status(500)
        } else if (!user) {
            res.status(401)
                .send('incorrect email or password')
        } else {
            user.isCorrectPassword(password, function (err, same) {
                if (err) {
                    res.status(500)
                } else if (!same) {
                    res.status(401)
                        .send('incorrect email or password')
                } else {
                    const payload = { email };
                    let token = jwt.sign(payload, secret, {
                        expiresIn: '1h'
                    },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer" + token,
                                message: "Login successful"
                            });
                        }
                    );
                    console.log(token); 
                    // res.cookie('token', token, { httpOnly: true })
                    //     .sendStatus(200); 
                };
            });
        };
    });
});


module.exports = router;