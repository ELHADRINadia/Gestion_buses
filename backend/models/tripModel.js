
const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
  date_arriver: {
      type: String,
      required: [true, 'svp entrer date arriver'],
  },
  date_depart: {
      type: String,
      required: [true, 'svp entrer date depart'],
  },
  ville_arriver: {
      type: String,
      required: [true, 'svp entrer ville arriver'],
  },
  ville_depart: {
      type: String,
      required: [true, 'svp entrer ville depart'],
  },
    bus: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bas",
      require: true,
    },
  },
);

module.exports = mongoose.model("trips", tripSchema);