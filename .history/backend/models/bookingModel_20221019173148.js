 const mongoose = require('mongoose')
 const bookingSchema = new mongoose.Schema(
{
   user : {
      type : String,
      required : true
   },
    : {
      type : String,
      required : true
   },
    places: {
      type : Number,
      required: true
   },
   price: {
      type : String,
      required: true
   },

 },
 { 
    timestamps: true,
 }
 );
  module.exports = mongoose.model('bookings',bookingSchema)