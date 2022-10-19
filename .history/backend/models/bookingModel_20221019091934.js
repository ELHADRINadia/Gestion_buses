 const mongoose = require('mongoose')
 const bookingSchema = mongoose.Schema({
  
   user : {
      type : St
   }
  
 },{ 
    timestamps: true,

 })
  module.exports = mongoose.model('booking',bookingSchema)