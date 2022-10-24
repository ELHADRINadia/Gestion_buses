const Booking = require("../models/bookingModel");
const Bus = require("../models/basModel");

const createbooking = async (req, res) => {
  try {
    const newBooking = new Booking({
      ...req.body, 
      transactionId: "1234",
      user: req.body.userId,
    });
    await newBooking.save();// add the 
    const bus = await Bus.findById(req.body.bus); 
    bus.placesRéservées = [...bus.placesRéservées, ...req.body.places]; booked places to the bus placesRéservées array in the database
    await bus.save();
    res.status(200).send({
      message: "place booked successfully",
      data: newBooking,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: "Booking failed",
      data: error,
      success: false,
    });
  }
};

// get all bookings
const GetAllBookings = async (req, res) => {
  try {
    const booking = await Booking.find();
    res.status(200).send({
      message: "Bookings fetched successfully",
      data: booking,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: "No Bookings Found",
      data: error,
      success: false,
    });
  }
};

const GetAllBookingsByUser = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.body.userId });
    res.status(200).send({
      message: "Bookings fetched successfully",
      data: bookings,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: "No Bookings Found",
      data: error,
      success: false,
    });
  }
};

const AnnuleBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    const bus = await Bus.findById(booking.bus);
    bus.placesRéservées = bus.placesRéservées.filter(
      (place) => !booking.places.includes(place)
    );
    await bus.save();
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).send({
      message: "Booking is a annuler",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: "Booking No annuler",
      data: error,
      success: false,
    });
  }
};
module.exports = {
  createbooking,
  GetAllBookings,
  GetAllBookingsByUser,
  AnnuleBooking,
};