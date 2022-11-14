const mongoose = require('mongoose');

const basSchema = new mongoose.Schema({
   Name: {
        type: String,
        required: [true, 'Please enter the bus name'],
    },
    places: {
        type: Number,
        min: 0,
        max: 40,
        required: [true, 'Please enter the number of places'],
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
        required: [true, 'svp entrer ville arriver'],
    },
    ville_depart: {
        type: String,
        required: [true, 'svp entrer ville depart'],
    },
    // placesRéservées: {
    //     type: Array,
    //     default: [],
    // }

})

module.exports = mongoose.
model('bas', basSchema);