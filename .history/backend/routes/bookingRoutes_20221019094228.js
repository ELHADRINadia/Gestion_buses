const express = require("express")
const router = express.Router()
const Booking = require("../models/bookingModel");

// const userController = require('../controllers/userController')
// const authController = require('../controllers/authController')
router.get("/get-bookings",  async (req, res) => {
    try {
      const bookings = await Booking.find();
      return res.status(200).send({
        success: true,
        message: "booking fetched successfully",
        data: bookings,
      });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  });

  router.post("/add-booking", async (req, res) => {
    try {
      const newBooking = new Booking(req.body);
      await newBooking.save();
      res.status(200).send({
        message: "Booking created successfully",
        success: true,
        data : ne
      });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  });

router.put('/:id',(req, res) => {
    res.send(`update booking ${req.params.id}`)
})
// router.remove('/:id',(req, res) => {
//     res.send(`delete booking ${req.params.id}`)
// })
// router.get("/", controller.get)

module.exports = router