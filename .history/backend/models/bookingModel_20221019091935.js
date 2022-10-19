 const mongoose = require('mongoose')
 const bookingSchema = mongoose.Schema({
  
   user : {
      type : Str
   }
  
 },{ 
    timestamps: true,

 })
  module.exports = mongoose.model('booking',bookingSchema)