const express = require('express');
const route = require('./routes/index');
const serviceRoute = require('./routes/services');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');
const authCheckMiddleware = require('./middleware/authCheck');

require('dotenv').config();

let app = express();

const PORT = process.env.PORT || 5000;

const dbURL = process.env.MONGO_DB_URL;

mongoose.connect(dbURL, { useNewUrlParser: true }, function(err){
    if(err){
        console.log('Error connecting to: '+ dbURL + '/n ' + err)
    }
    else{
        console.log('Connected to: '+ dbURL)
    }
});

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', route);

app.use('/user', authRoute);
app.use('/user/:id', authCheckMiddleware);

app.use('/services/:id/reserve', authCheckMiddleware);
app.use('/services', serviceRoute);

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});