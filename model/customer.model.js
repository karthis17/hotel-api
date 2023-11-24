const mongoose = require ("mongoose");

module.exports = new mongoose.model('Hotel1', {
    firstname:String,
    lastname:String,
    email: String,
    phno:String,
    checkin:Date,
    checkout:Date,
    roomtype:String,
    nof: Number,
    adult: Number,
    children: Number
}, 'Customers');

