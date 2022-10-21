//  const mongoose = require('mongoose')
//  const bookingSchema = new mongoose.Schema(
// {
//    user : {
//       type : String,
//       required : true
//    },
//    base : {
//       type : String,
//       required : true
//    },
//     places: {
//       type : Number,
//       required: true
//    },
//    price: {
//       type : String,
//       required: true
//    },

//  },
//  { 
//     timestamps: true,
//  }
//  );
//   module.exports = mongoose.model('bookings',bookingSchema)


const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    bus: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bus",
      require: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    seats: {
      type: Array,
      require: true,
    },
    transactionId: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("bookings", bookingSchema);    timestamps: true,
});

module.exports = mongoose.model('Trip', tripSchema);