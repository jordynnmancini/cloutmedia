const router = require("express").Router();
const db = require('../../models');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const withAuth = require('../../utils/auth');
const secret = 'supersupersecret';

// Authentication Routes

//new user sign up - matches with "/api/user/signup"
router.post('/signup', function (req, res) {
    const { email, name, password, primaryLocation, type } = req.body;
    const user = new db.User({ email, name, password, primaryLocation, type });
    user.save(function (err) {
        if (err) {
            res.status(500)
                .send("error signing up - please try again")
        } else {
            const payload = { email };
            const token = jwt.sign(payload, secret, {
                // 5 minutes 
                expiresIn: '300000'
            });

            res.cookie('token', token, { httpOnly: true })
                .json({ message: 'successful', token: user.id + "/" + token, id: user.id })
            console.log(token);
        }
    });
});

router.post('/login', function (req, res) {
    const { email, password } = req.body;
    db.User.findOne({ email }, function (err, user) {
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
                    const token = jwt.sign(payload, secret, {
                        expiresIn: '1h'
                    });
                    res.cookie('token', token, { httpOnly: true })
                        .json({ message: 'successful', token: user.id + "//" + token, id: user.id })
                    console.log(token);
                };
            });
        };
    });
});

//Dashboard Routes 
// use express sessions for registering the logged in user ID and rendering their info? 

router.get('/dashboard', function (req, res) {
    db.User.findOne({
        _id: (req.query.id),
    })
        .then(userData => res.json(userData))
        .catch(err => res.status(422).end());
})


router.put('/update', function (req, res) {
    // const { subType, primaryLocation, phoneNumber, bio } = req.body;
    db.User.findOneAndUpdate({ _id: (req.query.id) }, {
        subType: req.body.subType,
        primaryLocation: req.body.primaryLocation,
        phoneNumber: req.body.phoneNumber,
        bio: req.body.bio,

    })
        .then(userData => res.json(userData))
        .catch(err => res.status(422).end());
})

//Discover Routes 

router.get('/discover', function (req, res) {
    db.User.find({
        type: (req.query.type),
        primaryLocation: (req.query.primaryLocation)
    })
        .then(search => res.json(search))
        .catch(err => res.status(422).end());
});



module.exports = router;