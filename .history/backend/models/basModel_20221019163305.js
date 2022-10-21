const mongoose = require('mongoose')
const basesSchema = new mongoose.Schema(
{
    date_depart : {
     type : Date,
     required : true
  },
  date_depart : {
    type : Date,
    required : true
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
 module.exports = mongoose.model('bases',basesSchema)