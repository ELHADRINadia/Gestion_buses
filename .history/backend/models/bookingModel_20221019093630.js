 const mongoose = require('mongoose')
 const bookingSchema = mongoose.Schema({
  
   user : {
      type : String,
      required : true
   },
   seats : {
      type : Number,
      required: true
   },
  
 },
 { 
    timestamps: true,

 })
  module.exports = mongoose.model('bookings',bookingSchema)