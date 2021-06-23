const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// hashing password? 
// what other details do we need specific to artists? 

const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  stageName: {
    type: String,
    required: true,
  },
  thumbnail: {
    data: Buffer,
    contentType: String,
    required: false, 
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
  },
  bio: {
    type: String,
    required: false
  },
  primaryLocation: {
    type: String,
    required: true
  }
},
  { timestamps: true }
);

const Artist = mongoose.model("Artist", artistSchema);

module.exports = artistSchema;
