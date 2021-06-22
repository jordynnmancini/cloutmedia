const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// hashing password? other parameters for Artist vs. Sound Engineer? Split into two models or leave as one? 

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  stageName: {
    type: String,
    required: true,
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
  type: {
    type: String,
    required: [true, "register as an Artist or a Sound Engineer"]
  },
  bio: {
    type: String,
    required: false
  }
},
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = userSchema;
