 const mongoose = require('mongoose')
 const bookingSchema = mongoose.Schema({
    text: String,
    require: [true, 'please add a text value']
 },{
    timestamps: true,

 })
  module.exports = mongoose.model('booking',bookingSchema )