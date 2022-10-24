const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  createbooking,
  GetAllBookings,
  GetAllBookingsByUser,
  AnnuleBooking,
} = require("../Controllers/bookingController");

router.post("/create_booking",  createbooking);
router.get("/get_all_bookings",  GetAllBookings);
router.get("/updateBooking/:id",  GetAllBookingsByUser);
router.delete("/deleteBooking/:id",  AnnuleBooking);

module.exports = router;