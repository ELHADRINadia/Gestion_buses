 const mongoose = require('mongoose')
 const bookingSchema = mongoose.Schema({
  
   user : {
      type : String,
      required : true
   },
   seats : {
      type
   }
  
 },{ 
    timestamps: true,

 })
  module.exports = mongoose.model('booking',bookingSchema)