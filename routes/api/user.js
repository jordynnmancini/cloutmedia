const router = require("express").Router();
const db = require('../../models');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const withAuth = require('../../utils/auth');
const secret = 'supersupersecret';
const multer = require('multer');
const path = require('path');




// define image storage
const storage = multer.diskStorage({

    // destination for files
    destination: (req, file, cb) => {
        cb(null, '../../client/src/uploads/images');
    },

    // add back extension
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    },
});


// upload params for multer
const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 3,
    },
})

// Authentication Routes

//new user sign up - matches with "/api/user/signup"
router.post('/signup', upload.single('thumbnail'), function (req, res) {
    console.log(req.body.file, 'file')
    const { email, name, password, primaryLocation, type, thumbnail } = req.body;
    const user = new db.User({ email, name, password, primaryLocation, type, thumbnail });
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

router.get('/dashboard', function (req, res) {
    db.User.findOne({
        _id: (req.query.id),
    })
        .then(userData => res.json(userData))
        .catch(err => res.status(422).end());
})


router.put('/update', function (req, res) {
    console.log(req.body)
    db.User.findOneAndUpdate({ _id: (req.body.params.id) }, {
        subType: req.body.params.userData.subType,
        phoneNumber: req.body.params.userData.phoneNumber,
        bio: req.body.params.userData.bio,
    }, { useFindAndModify: false, returnOriginal: false })

        .then(userData => {
            console.log(userData)
            res.json(userData)
        })
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