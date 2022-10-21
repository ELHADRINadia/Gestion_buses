 const mongoose = require('mongoose')
 const bookingSchema = new mongoose.Schema(
{
   user : {
      type : String,
      required : true
   },
   p : {
      type : Number,
      required: true
   },
 },
 { 
    timestamps: true,
 }
 );
  module.exports = mongoose.model('bookings',bookingSchema)