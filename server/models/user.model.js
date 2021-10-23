const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// import { jsonwebtoken as jwt } from 'jsonwebtoken';
const jwt = require('jsonwebtoken')
    //constructor
var userSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: 'user Name can\'t be empty'
    },
    userSurname: {
        type: String,
        required: 'user Surname can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    Password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength: [6, 'Password must be atleast 6 character long']
    },


    userGender: {
        type: String
    },
    //used for encryption and decryption of pass ...
    SaltSecret: {
        type: String
    }

});


// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');


// Events
userSchema.pre('save', function(next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.Password, salt, (err, hash) => {
            this.Password = hash;
            this.SaltSecret = salt;
            next();
        })
    })


});


userSchema.methods.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.Password)
}

userSchema.methods.generatejwt = function() {
    // passing values for payload to construct the token
    return jwt.sign({ _id: this.id },
        process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXP
        })
}


mongoose.model('User', userSchema);