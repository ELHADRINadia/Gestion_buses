 const mongoose = require('mongoose')
 const bookingSchema = mongoose.Schema({
  
   user : {
      type : String,
      required : true
   },
   seats : {
      type : String
      reuired
      
   },
  
 },{ 
    timestamps: true,

 })
  module.exports = mongoose.model('booking',bookingSchema)