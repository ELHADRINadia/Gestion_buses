

const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    bus: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bas",
      require: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "u",
      require: true,
    },
    place: {
      type: Array,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("bookings", bookingSchema);