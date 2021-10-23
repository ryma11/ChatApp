require('./config/config');
require('./models/db');
require('./config/passportConfig.js');
const passport = require('passport');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rtsIndex = require('./routes/index.router');

var app = express();

//middleware

app.use(bodyParser.json());
app.use(cors());
app.use('', rtsIndex);
app.listen(process.env.PORT, () => {
    console.log('server started');
});
app.use(passport.initialize())