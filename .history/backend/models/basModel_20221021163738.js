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
        type: String,
        required: [true, 'svp entrer date arriver'],
    },
    date_depart: {
        type: String,
        required: [true, 'svp entrer date depart'],
    },
    ville_arriver: {
        type: String,
        required: [true, 'svp entrer date arriver'],
    },
    ville_depart: {
        type: String,
        required: [true, 'svp entrer date depart'],
    },
    places: {
        type: Number,
        min: 0,
        max: 40,
        required: [true, 'Please enter the number of places'],
    },

})

module.exports = mongoose.
placesRéservéesmodel('bas', basSchema);