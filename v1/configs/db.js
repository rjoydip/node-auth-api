"use strict";

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
const mongo_url = process.env.MONGOLAB_URI;
mongoose.connect(mongo_url, {
    useMongoClient: true,
    promiseLibrary: global.Promise
});

//Get the default connection
let db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

module.exports = db;