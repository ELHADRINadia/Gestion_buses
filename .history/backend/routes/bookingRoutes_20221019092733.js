const express = require("express")
const router = express.Router()
const Booking = require("../models/bookingModel");

// const userController = require('../controllers/userController')
// const authController = require('../controllers/authController')
router.get("/getbookings",  async (req, res) => {
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

  router.post("/addbooking", async (req, res) => {
    try {
      const newBooking = new Bus(req.body);
      await newBus.save();
      res.status(200).send({
        message: "Bus created successfully",
        success: true,
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