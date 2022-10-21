//  const mongoose = require('mongoose')
//  const bookingSchema = new mongoose.Schema(
// {
//    user : {
//       type : String,
//       required : true
//    },
//    base : {
//       type : String,
//       required : true
//    },
//     places: {
//       type : Number,
//       required: true
//    },
//    price: {
//       type : String,
//       required: true
//    },

//  },
//  { 
//     timestamps: true,
//  }
//  );
//   module.exports = mongoose.model('bookings',bookingSchema)


const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    busNumber: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please enter the bus number'],
        ref: 'Bus',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Please enter the bus number'],
      ref: 'Bus',
  },
    depart: {
        type: String,
        lowercase: true,
        required: [true, 'Please enter the departure place'],
    },
    arrive: {
        type: String,
        lowercase: true,
        required: [true, 'Please enter the arrival place'],
    },
    dateDep: {
        type: Date,
        required: [true, 'Please enter the date'],
    },
    dateArr: {
        type: Date,
        required: [true, 'Please enter the date'],
    },
    time: {
        type: String,
        required: [true, 'Please enter the time'],
    },
    price: {
        type: Number,
        required: [true, 'Please enter the price'],
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },

},{
    timestamps: true,
});

module.exports = mongoose.model('Trip', tripSchema);