const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
    Nombre_bas: {
        type: String,
        required: [true, 'Please enter the bus number'],
        unique: true,
    },
    Name: {
        type: String,
        required: [true, 'Please enter the bus name'],
    },
    places: {
        type: Number,
        min: 0,
        max: 38,
        required: [true, 'Please enter the number of places'],
    },

})

module.exports = mongoose.model('bas', busSchema);