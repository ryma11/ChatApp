const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('User');
const _ = require('lodash');


module.exports.register = (req, res, next) => {

    var user = new User();
    user.userName = req.body.userName;
    user.userSurname = "Rim";
    user.email = req.body.email;
    user.Password = req.body.Password;
    user.userGender = "male";
    user.save((err, doc) => {

        if (!err) {
            res.send(doc);
        } else {
            res.send(err);
            console.log(err);
        }

    });

}
module.exports.hook = (req, res, next) => {
    var user = ""
    console.log(req.body) // Call your action on the request here
    user = req.body;
    res.status(200).end() // Responding is important

}
module.exports.authenticate = (req, res, next) => {
    // call for passport authentication (passport.use new localStrategy in passportCongig)
    passport.authenticate('local', (err, user, info) => {
        if (err) return res.status(404).json(err)
        else if (user) return res.status(200).json({ "token": user.generatejwt() })
            // unkown user or wrong password 
        else return res.status(404).json(info)
    })(req, res);

}
module.exports.UserProfile = (req, res, next) => {
    User.findOne({ _id: req._id }, (err, user) => {
        if (!user)
            return res.status(404).json({ status: false, message: "User Record not Found" })
        else
            return res.status(200).json({
                status: true,
                user: _.pick(user, ['userName', 'userSurname', 'email'])
            })
    })
}