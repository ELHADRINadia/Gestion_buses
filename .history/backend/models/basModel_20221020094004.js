const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
    busNumber: {
        type: String,
        required: [true, 'Please enter the bus number'],
        unique: true,
    },
    busName: {
        type: String,
        required: [true, 'Please enter the bus name'],
    },
    place: {
        type: Number,
        min: 1,
        max: 50,
        required: [true, 'Please enter the number of places'],
    },

})

module.exports = mongoose.model('Bus', busSchema);