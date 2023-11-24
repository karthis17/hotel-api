const mongoose = require ("mongoose");

module.exports = new mongoose.model('Hotel', {
        img1: String,
        img2: String,
        img3: String,
        room_type: String,
        about: String,
     amenities: Object,
        luxury:Boolean,
        views:Array,
        private_room: Array
}, 'Rooms');