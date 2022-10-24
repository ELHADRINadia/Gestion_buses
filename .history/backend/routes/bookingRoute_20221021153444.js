const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  createbooking,
  GetAllBookings,
  GetAllBookingsByUser,
  AnnuleBooking,
} = require("../Controllers/bookingController");

router.post("/create_booking", authMiddleware, createbooking);
router.get("/get_all_bookings", authMiddleware, GetAllBookings);
router.get("/updateBooking/:id", authMiddleware, GetAllBookingsByUser);
router.delete("/deleteBooking/:id", authMiddleware, AnnuleBooking);

module.exports = router;