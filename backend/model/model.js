const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const Schema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 10,
        minlength: 2,
        required: true // Assuming name is required
    },
    email: {
        type: String,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: (props) => `${props.value} is not a valid email address!`
        },
        required: true // Assuming email is required
    },
    PhoneNumber:{
        type: Number
    },
    password: {
        type: String,
        required: true // Assuming password is required
    }
});


const UserModel = mongoose.model('UserModel', Schema);

module.exports = UserModel;
