const mongoose = require('mongoose')
const basesSchema = new mongoose.Schema(
{
    date_depart : {
     type : Date,
     required : true
  },
  date_arriver : {
    type : Date,
    required : true
 },
  nombre_ places: {
     type : String,
     required: true
  },

},
{ 
   timestamps: true,
}
);
 module.exports = mongoose.model('bases',basesSchema)