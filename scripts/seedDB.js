const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cloutmedia",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
);

const userSeed = [
  {
    email: "soundengineer@gmail.com",
    name: "Sam Engineer",
    password: "password123",
    primaryLocation: "Nashville",
    type: "Sound Engineer",
    subType: "Mastering",
    phoneNumber: "702-555-4646",
    bio: "I work exclusively with country artists out of a few studios in Downtown Nashville. Email me to get on my schedule.",
  },
  {
    email: "soundengineer2@gmail.com",
    name: "Kelly Masterer",
    password: "password123",
    primaryLocation: "Nashville",
    type: "Sound Engineer",
    subType: "Systems",
    phoneNumber: "722-555-4646",
    bio: "New to mastering - looking for practice with smaller local bands.",
  },
  {
    email: "soundengineer3@gmail.com",
    name: "Kyle Engineer",
    password: "password123",
    primaryLocation: "Nashville",
    type: "Sound Engineer",
    stageName: "Kyle the Sound Guy",
    phoneNumber: "614-555-6789",
    bio: "Made it big in LA, recently re-located to Nashville. I've worked with pop artists, country artists, pretty much any genre of artist. I prefer if you book with me by calling the number in my bio to reach my studio.",
  },
  {
    email: "soundengineer4@gmail.com",
    name: "Alex Audio",
    password: "password123",
    primaryLocation: "Nashville",
    type: "Sound Engineer",
    phoneNumber: "802-555-6789",
    bio: "call the number in my bio to book with me at my studio",
  },
  {
    email: "artistemail1@gmail.com",
    name: "Katrina Singer",
    password: "password123",
    primaryLocation: "Nashville",
    type: "Artist",
    subType: "Singer & Songwriter",
    stageName: "Rina",
    bio: "Country singer from the heart of Tennessee!",
  },
  {
    email: "artistemail2@gmail.com",
    name: "Michael Music",
    password: "password123",
    primaryLocation: "Nashville",
    type: "Artist",
    subType: "Singer & Acoustic Guitar",
    bio: "I'm a singer and acoustic guitar player looking to record my first EP",
  },
  {
    email: "artistemail3@gmail.com",
    name: "Valerie Song",
    password: "password123",
    primaryLocation: "Nashville",
    type: "Artist",
    stageName: "Val",
    phoneNumber: "802-555-6789",
    bio: "You can find me singing on Broadway Street most nights - looking to record some of my singles.",
  },
  {
    email: "soundLA@gmail.com",
    name: "Maria Studio",
    password: "password123",
    primaryLocation: "Los Angeles",
    type: "Sound Engineer",
    subType: "Monitor",
    phoneNumber: "802-555-6789",
    bio: "fresh out of my apprenticeship and looking to build my connections! I'm easier to reach by email than phone.",
  },
  {
    email: "soundLA2@gmail.com",
    name: "John Recording",
    password: "password123",
    primaryLocation: "Los Angeles",
    type: "Sound Engineer",
    subType: "Studio",
  },
  {
    email: "soundLA3@gmail.com",
    name: "Alice Engineer",
    password: "password123",
    primaryLocation: "Los Angeles",
    stageName: "Alice Wonder Beats",
    type: "Sound Engineer",
    subType: "Mastering",
    phoneNumber: "614-555-1234",
    bio: "I work exclusively with EDM Artists out of a few studios in Downtown LA. Email me to get on my schedule.",
  },
  {
    email: "artistLA@gmail.com",
    name: "Amber Johnson",
    password: "password123",
    primaryLocation: "Los Angeles",
    type: "Artist",
    subType: "DJ",
    stageName: "DJ Amber",
    bio: "Looking for a master engineer to collab with!",
  },
  {
    email: "artistLA2@gmail.com",
    name: "Oscar Smith",
    password: "password123",
    primaryLocation: "Los Angeles",
    type: "Artist",
    subType: "Singer",
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
    subType: "Studio",
    bio: "I've mostly worked with pop artists, but looking to branch out.",
  },
  {
    email: "soundNY2@gmail.com",
    name: "Annie Engineer",
    password: "password123",
    primaryLocation: "New York City",
    type: "Sound Engineer",
    bio: "I like working with indie artists!",
  },
  {
    email: "soundNY3@gmail.com",
    name: "Jeff Sound",
    password: "password123",
    primaryLocation: "New York City",
    type: "Sound Engineer",
    subType: "Systems",
  },
  {
    email: "artistNY@gmail.com",
    name: "Sally Star",
    password: "password123",
    primaryLocation: "New York City",
    type: "Artist",
    subType: "Broadway Singer",
    stageName: "Star Power",
  },
  {
    email: "artistNY2@gmail.com",
    name: "Maury Artist",
    password: "password123",
    primaryLocation: "New York City",
    type: "Artist",
    bio: "Trying to make it big in NYC!",
  },
  {
    email: "artistNY3@gmail.com",
    name: "Michelle Smith",
    password: "password123",
    primaryLocation: "New York City",
    type: "Artist",
    stageName: "Michelle Diamond",
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
