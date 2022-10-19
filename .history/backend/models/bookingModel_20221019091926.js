 const mongoose = require('mongoose')
 const bookingSchema = mongoose.Schema({
  
   user : {}
  
 },{ 
    timestamps: true,

 })
  module.exports = mongoose.model('booking',bookingSchema)