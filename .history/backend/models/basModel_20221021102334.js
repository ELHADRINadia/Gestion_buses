const mongoose = require('mongoose');

const basSchema = new mongoose.Schema({
    Nombre_bas: {
        type: String,
        required: [true, 'Please enter the bus number'],
        unique: true,
    },
    Name: {
        type: String,
        required: [true, 'Please enter the bus name'],
    },
    date_arriver: {
        type: Date,
        required: [true, 'svp entrer date arriver'],
    },
    date_depart: {
        type: Date,
        required: [true, 'svp entrer date depart'],
    },
    places: {
        type: Number,
        min: 0,
        max: 38,
        required: [true, 'Please enter the number of places'],
    },

})

module.exports = mongoose.model('bas', basSchema);