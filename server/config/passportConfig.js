 const passport = require('passport');
 const localStrategy = require('passport-local').Strategy;
 const mongodb = require('mongoose');
 // user schema location
 var User = mongodb.model('User')

 passport.use(new localStrategy({

     usernameField: 'email',
     passwordField: 'Password'

 }, (email, Password, done) => {
     // user is the response 
     User.findOne({ email: email }, (err, user) => {
         if (err)
             return done(err)
                 // unknown user (not found)
         else if (!user)
             return done(null, false, { message: 'Email is not registred ! ' })
                 // Wrong password
         else if (!user.verifyPassword(Password))
             return done(null, false, { message: 'Wrong Password ' })

         // Authentication Succeeded 
         else
             return done(null, user)
     })

 }))