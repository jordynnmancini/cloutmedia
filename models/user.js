const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require('bcryptjs');
const saltRounds = 10;

const userSchema = new mongoose.Schema({
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
  type: {
    type: String,
    required: true,
  },
  subType: {
    type: String,
    required: false,
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
  phoneNumber: {
    type: String,
    required: false,
  }
},
  { timestamps: true }
);

userSchema.pre('save', function (next) {
  if (this.isNew || this.isModified('password')) {
    const document = this;
    bcrypt.hash(this.password, saltRounds, function (err, hashedPassword) {
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

userSchema.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}

const User = mongoose.model("User", userSchema);

module.exports = User;
