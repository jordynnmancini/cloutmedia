const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/cloutmedia"
); 

const userSeed = [
    {
        email: "soundengineer@gmail.com",
        name: "Sam Engineer",
        password: "password123",
        primaryLocation: "Nashville",
        type: "Sound Engineer",
        bio: "Living in Nashville - love to work with country artists!"
    },
    {
        email: "soundengineer2@gmail.com",
        name: "Kelly Masterer",
        password: "password123",
        primaryLocation: "Nashville",
        type: "Sound Engineer",
        bio: "New to mastering - looking for practice with smaller local bands."
    },
    {
        email: "soundengineer3@gmail.com",
        name: "Kyle Engineer",
        password: "password123",
        primaryLocation: "Nashville",
        type: "Sound Engineer",
        stageName: "Kyle the Sound Guy",
        bio: "Made it big in LA, recently re-located to Nashville"
    },
    {
        email: "soundengineer4@gmail.com",
        name: "Alex Audio",
        password: "password123",
        primaryLocation: "Nashville",
        type: "Sound Engineer",
        bio: "check my schedule for my availability and studios I work from"
    },
    {
        email: "artistemail1@gmail.com",
        name: "Katrina Singer",
        password: "password123",
        primaryLocation: "Nashville",
        type: "Artist",
        stageName: "Rina", 
        bio: "Country singer from the heart of Tennessee!"
    },
    {
        email: "artistemail2@gmail.com",
        name: "Michael Music",
        password: "password123",
        primaryLocation: "Nashville",
        type: "Artist",
        bio: "I'm a singer and acoustic guitar player looking to record my first EP"
    },
    {
        email: "artistemail3@gmail.com",
        name: "Valerie Song",
        password: "password123",
        primaryLocation: "Nashville",
        type: "Artist",
        stageName: "Val",
        bio: "You can find me singing on Broadway Street most nights - looking to record some of my singles."
    },
    {
        email: "soundLA@gmail.com",
        name: "Maria Studio",
        password: "password123",
        primaryLocation: "Los Angeles",
        type: "Sound Engineer",
        bio: "fresh out of my apprenticeship and looking to build my connections!"
    },
    {
        email: "soundLA2@gmail.com",
        name: "John Recording",
        password: "password123",
        primaryLocation: "Los Angeles",
        type: "Sound Engineer"
    },
    {
        email: "soundLA3@gmail.com",
        name: "Alice Engineer",
        password: "password123",
        primaryLocation: "Los Angeles",
        stageName: "Alice Wonder Beats",
        type: "Sound Engineer",
    },
    {
        email: "artistLA@gmail.com",
        name: "Amber Johnson",
        password: "password123",
        primaryLocation: "Los Angeles",
        type: "Artist",
        stageName: "DJ Amber",
        bio: "Looking for a master engineer to collab with!"
    },
    {
        email: "artistLA2@gmail.com",
        name: "Oscar Smith",
        password: "password123",
        primaryLocation: "Los Angeles",
        type: "Artist"
    },
    {
        email: "artistLA3@gmail.com",
        name: "Ashley Artist",
        password: "password123",
        primaryLocation: "Los Angeles",
        type: "Artist",
        stageName: "Pixie",

    },
    {
        email: "soundNY@gmail.com",
        name: "George Johnson",
        password: "password123",
        primaryLocation: "New York City",
        type: "Sound Engineer",
    },
    {
        email: "soundNY2@gmail.com",
        name: "Annie Engineer",
        password: "password123",
        primaryLocation: "New York City",
        type: "Sound Engineer",
        bio: "I like working with indie artists!"
    },
    {
        email: "soundNY3@gmail.com",
        name: "Jeff Sound",
        password: "password123",
        primaryLocation: "New York City",
        type: "Sound Engineer",
    },
    {
        email: "artistNY@gmail.com",
        name: "Sally Star",
        password: "password123",
        primaryLocation: "New York City",
        type: "Artist",
        stageName: "Star Power"
    },
    {
        email: "artistNY2@gmail.com",
        name: "Maury Artist",
        password: "password123",
        primaryLocation: "New York City",
        type: "Artist",
        bio: "Trying to make it big in NYC!"
    },
    {
        email: "artistNY3@gmail.com",
        name: "Michelle Smith",
        password: "password123",
        primaryLocation: "New York City",
        type: "Artist",
        stageName: "Michelle Diamond"
    }
]; 

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1); 
    }); 