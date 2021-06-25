const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require('bcryptjs'); 
const saltRounds = 10; 

// what other details do we need specific to artists? 

const artistSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  primaryLocation: {
    type: String,
    required: true
  },
  stageName: {
    type: String,
    required: false,
  },
  thumbnail: {
    data: Buffer,
    contentType: String,
    required: false,
  },
  bio: {
    type: String,
    required: false
  },
},
  { timestamps: true }
);

artistSchema.pre('save', function(next) {
  if (this.isNew || this.isModified('password')) {
    const document = this;
    bcrypt.hash(this.password, saltRounds, function(err, hashedPassword) {
      if (err) {
        next(err); 
      } else {
        document.password = hashedPassword; 
        next(); 
      }
    });
  } else {
    next(); 
  }
});

artistSchema.methods.isCorrectPassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, same) {
    if(err) {
      callback(err);
    } else {
      callback(err, same); 
    }
  });
}

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
