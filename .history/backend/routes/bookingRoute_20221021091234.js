const express = require("express");
const router = express();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  BookSeat,
  GetAllBookings,
  GetAllBookingsByUser,
  CancelBooking,
} = require("../Controllers/bookingController");

router.post("/create_booking",BookSeat);
router.get("/get-all-bookings", authMiddleware, GetAllBookings);
router.get("/:id", authMiddleware, GetAllBookingsByUser);
router.delete("/:id", authMiddleware, CancelBooking);

module.exports = router;