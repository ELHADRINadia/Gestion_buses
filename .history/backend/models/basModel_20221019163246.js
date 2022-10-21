const mongoose = require('mongoose')
const basesSchema = new mongoose.Schema(
{
    date_depart : {
     type : ate,
     required : true
  },
   places: {
     type : Number,
     required: true
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