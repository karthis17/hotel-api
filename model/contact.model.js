const mongoose = require ("mongoose");

module.exports = new mongoose.model('Contact', {
    name:String,
    email:String,
    message:String
});