const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// hashing password? 
// what other details do we need specific to engineers? 

const engineerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    stageName: {
        type: String,
        required: false
    },
    thumbnail: {
        data: Buffer,
        contentType: String,
        required: false 
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

const Engineer = mongoose.model("Engineer", engineerSchema);

module.exports = engineerSchema;