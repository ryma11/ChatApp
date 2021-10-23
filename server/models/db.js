const mongoose = require('mongoose');

//mongoose is the ORM
mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, }, (err) => {
    if (!err) { console.log("MongoDB connection succeeded !") } else {
        console.log("error in MongoDB connection: " + JSON.stringify(err, undefined, 2));
    }
});

require('./user.model');