const express = require("express")
const router = express.Router()
const Booking = require("../models/bookingModel");

// const userController = require('../controllers/userController')
// const authController = require('../controllers/authController')
router.get("/getbookings",  );

  router.post("/addbooking", async (req, res) => {
    try {
      const existingBus = await Bus.findOne({ busNumber: req.body.busNumber });
      if (existingBus) {
        return res.status(400).send({
          message: "Bus already exists",
          success: false,
        });
      }
      const newBus = new Bus(req.body);
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