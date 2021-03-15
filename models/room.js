const mongoose = require('mongoose');


const RoomSchema = new mongoose.Schema({
    people: Number,
    price: Number,
    isBathroom: Boolean,
});

const RoomModel = mongoose.model('rooms', RoomSchema);

module.exports = RoomModel;
